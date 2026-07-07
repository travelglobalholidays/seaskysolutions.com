"use client";

import { useFlight } from "@/context/FlightContext";
import axiosInstance from "@/lib/axiosInstance";
import { encryptSearchParams } from "@/lib/encryption";
import airportData from "@/public/data/airports.json";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const cabinClasses = ["Economy", "Premium Economy", "Business", "First Class"];
const maxAirportSuggestions = 7;
const maxTravelers = 9;
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const airports = airportData.map((airport, index) => {
  const separatorIndex = airport.indexOf("-");
  const code = airport.slice(0, separatorIndex);
  const details = airport.slice(separatorIndex + 1);

  return {
    code,
    details,
    id: `${code}-${index}`,
    label: `${code} - ${details.replaceAll("-", ", ")}`,
    searchText: airport.toLowerCase(),
  };
});

const startOfDay = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const addDays = (date, numberOfDays) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + numberOfDays);
  return startOfDay(nextDate);
};

const addMonths = (date, numberOfMonths) =>
  new Date(date.getFullYear(), date.getMonth() + numberOfMonths, 1);

const isSameDay = (firstDate, secondDate) =>
  Boolean(
    firstDate &&
    secondDate &&
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate(),
  );

const isBeforeDay = (firstDate, secondDate) =>
  startOfDay(firstDate).getTime() < startOfDay(secondDate).getTime();

const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatApiDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatMonth = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

const getCalendarDays = (month) => {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();

  return Array.from({ length: 42 }, (_, index) => {
    const day = index - firstDay.getDay() + 1;

    return day > 0 && day <= daysInMonth
      ? new Date(month.getFullYear(), month.getMonth(), day)
      : null;
  });
};

const normalizeTripType = (value) =>
  value === "roundtrip" || value === "Roundtrip" || value === "round-trip"
    ? "round-trip"
    : "one-way";

const normalizeCabinClass = (value) => {
  if (!value) return "Economy";
  const readable = value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  return readable === "First" ? "First Class" : readable;
};

const findAirportByCode = (code) =>
  airports.find((airport) => airport.code === code?.toUpperCase());

const getInitialAirport = (code, display) => {
  if (display) {
    const match = display.match(/^([A-Z]{3})/);
    return {
      code: match?.[1] || code || "",
      label: display,
    };
  }

  const airport = findAirportByCode(code);
  return {
    code: airport?.code || code || "",
    label: airport?.label || code || "",
  };
};

const PlaneIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4 shrink-0 text-icon-muted"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m21.2 4.8-1-1a2.07 2.07 0 0 0-2.91 0l-4.08 4.08-7.55-2.1-1.48 1.48 6.11 3.54-3.8 3.8-2.4-.38-1.13 1.13 3.18 2.52 2.52 3.18 1.13-1.13-.38-2.4 3.8-3.8 3.54 6.11 1.48-1.48-2.1-7.55L20.2 7.7a2.07 2.07 0 0 0 0-2.9Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    aria-hidden="true"
    className="size-5 shrink-0 text-icon-muted"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 2.75v3m8-3v3M3.75 9h16.5m-15 11h13.5a1.5 1.5 0 0 0 1.5-1.5V5.75a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5V18.5a1.5 1.5 0 0 0 1.5 1.5Zm3-7h.01v.01H8.25V13Zm3.75 0h.01v.01H12V13Zm3.75 0h.01v.01h-.01V13Zm-7.5 3.5h.01v.01H8.25v-.01Zm3.75 0h.01v.01H12v-.01Z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    aria-hidden="true"
    className="size-5 shrink-0 text-icon-muted"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 1 1 14 0H5Z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="3"
  >
    <circle cx="10.8" cy="10.8" r="5.8" />
    <path strokeLinecap="round" d="m15 15 4.5 4.5" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowIcon = ({ direction }) => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
    />
  </svg>
);

const AirportAutocomplete = ({
  id,
  label,
  onSelect,
  placeholder,
  selectedAirport,
}) => {
  const listboxId = `${id}-suggestions`;
  const [query, setQuery] = useState(selectedAirport?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const normalizedQuery = query.trim().toLowerCase();
  const suggestions = normalizedQuery
    ? airports
        .filter((airport) => airport.searchText.includes(normalizedQuery))
        .slice(0, maxAirportSuggestions)
    : [];

  const selectAirport = (airport) => {
    setQuery(airport.label);
    onSelect({ code: airport.code, label: airport.label });
    setIsOpen(false);
    setActiveIndex(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (!suggestions.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((currentIndex) =>
        currentIndex === suggestions.length - 1 ? 0 : currentIndex + 1,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((currentIndex) =>
        currentIndex === 0 ? suggestions.length - 1 : currentIndex - 1,
      );
    }

    if (event.key === "Enter" && isOpen) {
      event.preventDefault();
      selectAirport(suggestions[activeIndex]);
    }
  };

  return (
    <div
      className="relative block min-w-0 border-b border-subtle pb-4 sm:border-r sm:px-4 lg:col-span-4 lg:px-3 xl:col-span-1 xl:border-b-0 xl:px-4 xl:pb-0"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <label
        className="block text-sm font-poppins-medium text-label lg:text-base"
        htmlFor={id}
      >
        {label}
      </label>
      <span className="mt-5 flex items-center gap-2">
        <PlaneIcon />
        <input
          aria-activedescendant={
            isOpen && suggestions.length
              ? `${listboxId}-option-${activeIndex}`
              : undefined
          }
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-label={`${label} airport`}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-base font-poppins-medium text-light-blue outline-none placeholder:text-placeholder"
          id={id}
          onChange={(event) => {
            setQuery(event.target.value);
            onSelect({ code: "", label: "" });
            setIsOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setIsOpen(Boolean(normalizedQuery))}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          role="combobox"
          type="text"
          value={query}
        />
      </span>

      {isOpen && normalizedQuery && (
        <ul
          className="absolute left-0 top-[calc(100%+1rem)] z-40 max-h-[350px] w-full overflow-y-auto rounded-xl border border-subtle bg-white p-1.5 shadow-dropdown lg:w-[min(430px,calc(100vw-3rem))]"
          id={listboxId}
          role="listbox"
        >
          {suggestions.length ? (
            suggestions.map((airport, index) => (
              <li
                aria-selected={activeIndex === index}
                id={`${listboxId}-option-${index}`}
                key={airport.id}
                role="option"
              >
                <button
                  className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    activeIndex === index
                      ? "bg-light-grey-hover text-blue"
                      : "text-light-blue hover:bg-light-grey"
                  }`}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    selectAirport(airport);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  type="button"
                >
                  <span className="rounded-md bg-light-grey px-2 py-1 text-xs font-poppins-semibold text-blue">
                    {airport.code}
                  </span>
                  <span className="pt-0.5 text-sm leading-snug">
                    {airport.details.replaceAll("-", ", ")}
                  </span>
                </button>
              </li>
            ))
          ) : (
            <li className="px-3 py-3 text-sm text-light">
              No matching airports found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

const CalendarMonth = ({
  departureDate,
  month,
  onSelect,
  returnDate,
  today,
}) => (
  <div className="min-w-0 flex-1">
    <h4 className="text-center font-poppins-semibold text-sm text-heading">
      {formatMonth(month)}
    </h4>
    <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
      {weekDays.map((day) => (
        <span
          className="pb-1 text-[11px] font-poppins-semibold text-light"
          key={day}
        >
          {day}
        </span>
      ))}
      {getCalendarDays(month).map((day, index) => {
        if (!day) {
          return <span className="size-8 sm:size-9" key={`empty-${index}`} />;
        }

        const isDisabled = isBeforeDay(day, today);
        const isRangeStart = isSameDay(day, departureDate);
        const isRangeEnd = isSameDay(day, returnDate);
        const isInRange =
          departureDate &&
          returnDate &&
          day.getTime() > departureDate.getTime() &&
          day.getTime() < returnDate.getTime();

        return (
          <button
            aria-label={formatDate(day)}
            aria-pressed={isRangeStart || isRangeEnd}
            className={`mx-auto flex size-8 items-center justify-center rounded-full text-xs transition-colors sm:size-9 ${
              isRangeStart || isRangeEnd
                ? "bg-blue font-poppins-semibold text-white"
                : isInRange
                  ? "bg-light-grey-hover font-poppins-medium text-blue"
                  : isSameDay(day, today)
                    ? "border border-blue font-poppins-semibold text-blue"
                    : "text-light-blue hover:bg-light-grey"
            } disabled:cursor-not-allowed disabled:text-disabled disabled:hover:bg-transparent`}
            disabled={isDisabled}
            key={day.toISOString()}
            onClick={() => onSelect(day)}
            type="button"
          >
            {day.getDate()}
          </button>
        );
      })}
    </div>
  </div>
);

const DateRangePicker = ({
  departureDate,
  returnDate,
  setDepartureDate,
  setReturnDate,
  tripType,
}) => {
  const datePickerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(departureDate.getFullYear(), departureDate.getMonth(), 1),
  );
  const today = startOfDay(new Date());

  useEffect(() => {
    const closePanel = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const closeWithEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closePanel);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("mousedown", closePanel);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  const selectDate = (date) => {
    if (tripType === "one-way") {
      setDepartureDate(date);
      setIsOpen(false);
      return;
    }

    if (!departureDate || returnDate || isBeforeDay(date, departureDate)) {
      setDepartureDate(date);
      setReturnDate(null);
      return;
    }

    setReturnDate(date);
    setIsOpen(false);
  };

  return (
    <div
      className="relative min-w-0 border-b border-subtle pb-4 sm:col-span-2 sm:px-4 lg:col-span-4 lg:px-3 xl:col-span-1 xl:border-b-0 xl:border-r xl:px-0 xl:pb-0"
      ref={datePickerRef}
    >
      <div className="grid gap-4 min-[460px]:grid-cols-2 min-[460px]:gap-0">
        <div className="min-w-0 min-[460px]:border-r min-[460px]:border-subtle min-[460px]:pr-3 xl:px-4">
          <span className="block text-sm font-poppins-medium text-label xl:text-base">
            Departure Date
          </span>
          <button
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            className="mt-4 flex w-full min-w-0 items-center gap-2 text-left text-sm font-poppins-medium text-light-blue xl:text-base"
            onClick={() => setIsOpen((isDatePickerOpen) => !isDatePickerOpen)}
            type="button"
          >
            <CalendarIcon />
            <span className="truncate">{formatDate(departureDate)}</span>
          </button>
        </div>

        <div className="min-w-0 min-[460px]:pl-3 xl:px-4">
          <span className="block text-sm font-poppins-medium text-label xl:text-base">
            Return Date
          </span>
          {tripType === "round-trip" ? (
            <button
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              className="mt-4 flex w-full min-w-0 items-center gap-2 text-left text-sm font-poppins-medium text-light-blue xl:text-base"
              onClick={() => setIsOpen((isDatePickerOpen) => !isDatePickerOpen)}
              type="button"
            >
              <CalendarIcon />
              <span className="truncate">
                {returnDate ? formatDate(returnDate) : "Select return date"}
              </span>
            </button>
          ) : (
            <span className="mt-3 block text-sm leading-snug text-muted">
              Book a round trip to save more
            </span>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          aria-label="Choose travel dates"
          className="absolute left-1/2 top-[calc(100%+1rem)] z-50 w-[min(680px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-subtle bg-white p-4 shadow-dropdown sm:p-5 lg:left-auto lg:right-0 lg:translate-x-0"
          role="dialog"
        >
          <div className="flex items-center justify-between gap-3">
            <button
              aria-label="Previous month"
              className="flex size-9 items-center justify-center rounded-full border border-subtle text-blue transition-colors hover:bg-light-grey disabled:cursor-not-allowed disabled:opacity-35"
              disabled={
                visibleMonth.getFullYear() === today.getFullYear() &&
                visibleMonth.getMonth() === today.getMonth()
              }
              onClick={() => setVisibleMonth((month) => addMonths(month, -1))}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <p className="text-center text-xs text-light sm:text-sm">
              {tripType === "round-trip"
                ? "Select departure and return dates"
                : "Select your departure date"}
            </p>
            <button
              aria-label="Next month"
              className="flex size-9 items-center justify-center rounded-full border border-subtle text-blue transition-colors hover:bg-light-grey"
              onClick={() => setVisibleMonth((month) => addMonths(month, 1))}
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="mt-4 flex gap-6">
            <CalendarMonth
              departureDate={departureDate}
              month={visibleMonth}
              onSelect={selectDate}
              returnDate={returnDate}
              today={today}
            />
            <div className="hidden min-w-0 flex-1 border-l border-subtle pl-6 sm:block">
              <CalendarMonth
                departureDate={departureDate}
                month={addMonths(visibleMonth, 1)}
                onSelect={selectDate}
                returnDate={returnDate}
                today={today}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TripTypeButton = ({ checked, children, onClick }) => (
  <button
    aria-pressed={checked}
    className="flex items-center gap-2.5 whitespace-nowrap text-sm font-poppins-semibold text-heading transition-colors hover:text-blue sm:text-lg"
    onClick={onClick}
    type="button"
  >
    <span
      className={`flex size-5 items-center justify-center rounded-full border-2 sm:size-6 ${
        checked ? "border-blue" : "border-border-strong"
      }`}
    >
      {checked && <span className="size-2.5 rounded-full bg-blue sm:size-3" />}
    </span>
    {children}
  </button>
);

const CounterRow = ({
  count,
  disabledIncrement,
  label,
  note,
  onDecrement,
  onIncrement,
}) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <div>
      <p className="text-sm font-poppins-semibold leading-tight text-heading">
        {label}
      </p>
      <p className="mt-1 text-xs leading-tight text-muted">{note}</p>
    </div>
    <div className="flex items-center gap-3">
      <button
        aria-label={`Decrease ${label}`}
        className="flex size-8 items-center justify-center rounded-full border border-border-strong text-lg leading-none text-muted transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-35"
        disabled={label === "Adults" ? count === 1 : count === 0}
        onClick={onDecrement}
        type="button"
      >
        -
      </button>
      <span className="w-4 text-center text-sm font-poppins-semibold text-heading">
        {count}
      </span>
      <button
        aria-label={`Increase ${label}`}
        className="flex size-8 items-center justify-center rounded-full border border-border-strong text-lg leading-none text-muted transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-35"
        disabled={disabledIncrement}
        onClick={onIncrement}
        type="button"
      >
        +
      </button>
    </div>
  </div>
);

const SearchForm = ({ initialValues = {}, isResultsPage = false }) => {
  const router = useRouter();
  const flightContext = useFlight();
  const travelersPanelRef = useRef(null);
  const initialFrom = getInitialAirport(
    initialValues.origin || initialValues.from,
    initialValues.fromDisplay,
  );
  const initialTo = getInitialAirport(
    initialValues.destination || initialValues.to,
    initialValues.toDisplay,
  );

  const [tripType, setTripType] = useState(() =>
    normalizeTripType(initialValues.tripType),
  );
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [fromAirport, setFromAirport] = useState(initialFrom);
  const [toAirport, setToAirport] = useState(initialTo);
  const [departureDate, setDepartureDate] = useState(() =>
    initialValues.departureDate
      ? startOfDay(new Date(initialValues.departureDate))
      : addDays(startOfDay(new Date()), 7),
  );
  const [returnDate, setReturnDate] = useState(() =>
    initialValues.returnDate
      ? startOfDay(new Date(initialValues.returnDate))
      : addDays(startOfDay(new Date()), 14),
  );
  const [travelers, setTravelers] = useState(
    initialValues.passengers || {
      adults: 1,
      children: 0,
      infants: 0,
    },
  );
  const [cabinClass, setCabinClass] = useState(() =>
    normalizeCabinClass(initialValues.cabinClass || initialValues.travelClass),
  );
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    setSearchData = () => {},
    setResults = () => {},
    setFilteredResults = () => {},
    setLoading = () => {},
    setError = () => {},
  } = flightContext || {};

  const totalTravelers =
    travelers.adults + travelers.children + travelers.infants;
  const travelersSummary =
    totalTravelers === 1
      ? `1 Adult, ${cabinClass}`
      : `${totalTravelers} Travelers, ${cabinClass}`;

  useEffect(() => {
    const closePanel = (event) => {
      if (
        travelersPanelRef.current &&
        !travelersPanelRef.current.contains(event.target)
      ) {
        setIsTravelersOpen(false);
      }
    };

    const closeWithEscape = (event) => {
      if (event.key === "Escape") setIsTravelersOpen(false);
    };

    document.addEventListener("mousedown", closePanel);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("mousedown", closePanel);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  const updateTraveler = (type, amount) => {
    setTravelers((currentTravelers) => {
      const nextValue = Math.max(
        type === "adults" ? 1 : 0,
        currentTravelers[type] + amount,
      );
      const nextTravelers = { ...currentTravelers, [type]: nextValue };
      const nextTotal =
        nextTravelers.adults + nextTravelers.children + nextTravelers.infants;

      return nextTotal > maxTravelers ? currentTravelers : nextTravelers;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setFormError("");
    setError("");

    if (!fromAirport.code || !toAirport.code) {
      const message = "Please select valid airports from the suggestions.";
      setFormError(message);
      setError(message);
      return;
    }

    if (fromAirport.code === toAirport.code) {
      const message = "Origin and destination cannot be the same.";
      setFormError(message);
      setError(message);
      return;
    }

    if (tripType === "round-trip" && !returnDate) {
      const message = "Please select a return date.";
      setFormError(message);
      setError(message);
      return;
    }

    const payload = {
      origin: fromAirport.code,
      destination: toAirport.code,
      departureDate: formatApiDate(departureDate),
      tripType: tripType === "round-trip" ? "roundtrip" : "oneway",
      returnDate: tripType === "round-trip" ? formatApiDate(returnDate) : null,
      passengers: {
        adults: travelers.adults,
        children: travelers.children,
        infants: travelers.infants,
      },
      cabinClass: cabinClass.toLowerCase().replaceAll(" ", "_"),
    };

    try {
      setIsSubmitting(true);
      setLoading(true);
      setFilteredResults([]);

      const response = await axiosInstance.post("/flights/search", payload);

      let flightOffers = [];
      if (response?.data?.data) {
        if (Array.isArray(response.data.data)) {
          flightOffers = response.data.data;
        } else if (Array.isArray(response.data.data.offers)) {
          flightOffers = response.data.data.offers;
        } else if (response.data.data.id) {
          flightOffers = [response.data.data];
        }
      } else if (Array.isArray(response?.data?.offers)) {
        flightOffers = response.data.offers;
      } else if (Array.isArray(response?.data)) {
        flightOffers = response.data;
      } else if (response?.data?.id) {
        flightOffers = [response.data];
      }

      const searchData = {
        ...payload,
        fromDisplay: fromAirport.label,
        toDisplay: toAirport.label,
      };

      setResults(flightOffers);
      setSearchData(searchData);

      const encryptedQuery = encryptSearchParams(searchData);
      router.push(`/flights/result?q=${encryptedQuery}`);
    } catch (error) {
      console.error("Search error:", error);
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        (error.request
          ? "No response from server. Please check your connection."
          : error.message || "Search failed. Please try again.");
      setFormError(message);
      setError(message);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="relative mx-auto container"
      id="flight-search"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto flex w-fit items-center gap-7 rounded-t-[20px] border-x border-t border-white/50 bg-white/95 px-7 py-3 shadow-card backdrop-blur sm:gap-12 sm:px-8">
        <TripTypeButton
          checked={tripType === "one-way"}
          onClick={() => setTripType("one-way")}
        >
          One way
        </TripTypeButton>
        <TripTypeButton
          checked={tripType === "round-trip"}
          onClick={() => {
            setTripType("round-trip");
            setReturnDate(
              (currentReturnDate) =>
                currentReturnDate || addDays(departureDate, 7),
            );
          }}
        >
          Round trip
        </TripTypeButton>
      </div>

      <div className="relative  rounded-[24px] border border-white/70 bg-white/98 px-5 py-5 shadow-modal sm:px-7 lg:px-6 lg:py-6 xl:px-8">
        {(formError || isResultsPage) && (
          <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-subtle bg-light-grey px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            {isResultsPage && (
              <p className="font-poppins-semibold text-sm text-heading">
                Modify your search
              </p>
            )}
            {formError && (
              <p className="text-sm font-poppins-medium text-red-600">
                {formError}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-y-5 sm:grid-cols-2 lg:grid-cols-12 lg:items-center lg:gap-y-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)_minmax(0,1.76fr)_minmax(0,1fr)_minmax(0,.9fr)] xl:gap-y-0">
          <AirportAutocomplete
            id="departure-airport"
            key={`from-${fromAirport.code}-${fromAirport.label}`}
            label="Departure"
            onSelect={setFromAirport}
            placeholder="Leaving from ..."
            selectedAirport={fromAirport}
          />

          <AirportAutocomplete
            id="arrival-airport"
            key={`to-${toAirport.code}-${toAirport.label}`}
            label="Arrival"
            onSelect={setToAirport}
            placeholder="Going to..."
            selectedAirport={toAirport}
          />

          <DateRangePicker
            departureDate={departureDate}
            returnDate={returnDate}
            setDepartureDate={setDepartureDate}
            setReturnDate={setReturnDate}
            tripType={tripType}
          />

          <div
            className="relative min-w-0 border-b border-subtle pb-4 sm:border-r sm:px-4 lg:col-span-6 lg:border-b-0 lg:px-3 lg:pb-0 xl:col-span-1 xl:px-4"
            ref={travelersPanelRef}
          >
            <span className="block text-sm font-poppins-medium text-label lg:text-base">
              Travelers &amp; Class
            </span>
            <button
              aria-expanded={isTravelersOpen}
              aria-haspopup="dialog"
              className="mt-5 flex w-full items-center gap-2 text-left text-base font-poppins-medium text-control-text"
              onClick={() => setIsTravelersOpen((isOpen) => !isOpen)}
              type="button"
            >
              <UserIcon />
              <span className="min-w-0 flex-1 truncate">
                {travelersSummary}
              </span>
              <ChevronIcon />
            </button>

            {isTravelersOpen && (
              <div
                aria-label="Choose travelers and cabin class"
                className="absolute left-0 top-[calc(100%+1.25rem)] z-30 w-[min(390px,calc(100vw-3rem))] rounded-2xl border border-subtle bg-white p-5 shadow-dropdown xl:left-auto xl:right-0"
                role="dialog"
              >
                <span className="absolute -top-2 right-8 size-4 rotate-45 border-l border-t border-subtle bg-white" />
                <h3 className="font-poppins-semibold text-base text-heading">
                  Travelers
                </h3>
                <div className="mt-1 divide-y divide-subtle">
                  <CounterRow
                    count={travelers.adults}
                    disabledIncrement={totalTravelers >= maxTravelers}
                    label="Adults"
                    note="12 years and above"
                    onDecrement={() => updateTraveler("adults", -1)}
                    onIncrement={() => updateTraveler("adults", 1)}
                  />
                  <CounterRow
                    count={travelers.children}
                    disabledIncrement={totalTravelers >= maxTravelers}
                    label="Children"
                    note="2 - 11 years"
                    onDecrement={() => updateTraveler("children", -1)}
                    onIncrement={() => updateTraveler("children", 1)}
                  />
                  <CounterRow
                    count={travelers.infants}
                    disabledIncrement={totalTravelers >= maxTravelers}
                    label="Infants"
                    note="Under 2 years"
                    onDecrement={() => updateTraveler("infants", -1)}
                    onIncrement={() => updateTraveler("infants", 1)}
                  />
                </div>

                <label className="mt-3 block border-t border-subtle pt-4">
                  <span className="text-sm font-poppins-semibold text-heading">
                    Cabin class
                  </span>
                  <select
                    className="mt-2 w-full rounded-lg border border-border-strong bg-white px-3 py-2.5 text-sm text-control-text outline-none transition-colors focus:border-blue"
                    onChange={(event) => setCabinClass(event.target.value)}
                    value={cabinClass}
                  >
                    {cabinClasses.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                {totalTravelers >= maxTravelers && (
                  <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-center text-xs font-poppins-medium text-amber-700">
                    Maximum {maxTravelers} travelers allowed
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="min-w-0 sm:px-4 lg:col-span-6 lg:px-3 xl:col-span-1 xl:pl-5 xl:pr-0">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-[11px] bg-blue px-5 py-4 text-base font-poppins-semibold text-white transition-colors hover:bg-blue-dark disabled:cursor-not-allowed disabled:opacity-65 lg:min-h-[68px] lg:text-lg"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Searching
                </>
              ) : (
                <>
                  <SearchIcon />
                  {isResultsPage ? "UPDATE" : "SEARCH"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
