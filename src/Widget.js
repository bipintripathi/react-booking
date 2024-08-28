import React, {useState, useEffect} from 'react'

const sizes = [
    { id: 82, label: 'Standing TV Unit 4x6', price: 600 },
    { id: 168, label: 'Standing TV Unit 5x7', price: 800 },
    { id: 169, label: 'Standing TV Unit 6x8', price: 900 },
    { id: 170, label: 'Standing TV Unit 7x9', price: 1000 },
    { id: 171, label: 'Standing TV Unit 8x10', price: 1100 },
    { id: 172, label: 'Standing TV Unit 9x10', price: 1200 },
];

const times = [
    { id: 1, label: '9:00 AM - 10:00 AM', value:"9:00 AM - 10:00 AM" },
    { id: 2, label: '10:00 AM - 11:00 AM', value:"10:00 AM - 11:00 AM" },
    { id: 3, label: '11:00 AM - 12:00 PM', value:"11:00 AM - 12:00 PM" },
    { id: 4, label: '12:00 PM - 1:00 PM', value:"12:00 PM - 1:00 PM" },
    { id: 5, label: '1:00 PM - 2:00 PM', value:"1:00 PM - 2:00 PM" },
    { id: 6, label: '2:00 PM - 3:00 PM', value:"2:00 PM - 3:00 PM" },
    { id: 7, label: '3:00 PM - 4:00 PM', value:"3:00 PM - 4:00 PM" },
    { id: 8, label: '4:00 PM - 5:00 PM', value:"4:00 PM - 5:00 PM" },
    { id: 9, label: '5:00 PM - 6:00 PM' , value:"5:00 PM - 6:00 PM"},
    { id: 10, label: '6:00 PM - 7:00 PM', value:"6:00 PM - 7:00 PM" },
    { id: 11, label: '7:00 PM - 8:00 PM', value:"7:00 PM - 8:00 PM" },
    { id: 12, label: '8:00 PM - 9:00 PM', value:"8:00 PM - 9:00 PM" }  
];

const isPastTimeSlot = (timeSlot, selectedDate) => {
    // Helper function to convert 12-hour time format to 24-hour time format
    const parseTime = (timeStr) => {
      const [time, modifier] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
  
      if (modifier === 'PM' && hours !== 12) {
        hours += 12;
      } else if (modifier === 'AM' && hours === 12) {
        hours = 0;
      }
  
      return { hours, minutes };
    };
  
    // Current time
    const currentTime = new Date();
  
    // Parse the time slots
    const [startTimeStr] = timeSlot.split(' - ');
    const { hours: startHours, minutes: startMinutes } = parseTime(startTimeStr);
  
    // Create a Date object for the start of the time slot
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(startHours);
    selectedDateTime.setMinutes(startMinutes);
    selectedDateTime.setSeconds(0);
  
    // Check if the time slot is in the past
    return selectedDateTime < currentTime;
  };

const humanDate = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const currentDate = new Date();
    const inputDate = new Date(date);
  
    // Get the difference in days between the current date and the input date
    const diffTime = inputDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const dayOfMonth = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    // Determine the suffix for the day (st, nd, rd, th)
    const daySuffix = (dayOfMonth) => {
        if (dayOfMonth > 3 && dayOfMonth < 21) return 'th'; // covers 11th-19th
        switch (dayOfMonth % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const formattedDate = `${dayOfMonth}${daySuffix(dayOfMonth)} ${month} ${year}`;

    if (diffDays === 0) {
        return `Today ${formattedDate}`;
    } else if (diffDays === 1) {
        return `Tomorrow ${formattedDate}`;
    } else {
        return `${dayOfWeek} ${formattedDate}`;
    }
};

const getNext30Days = () => {
    const dates = [];
    const today = new Date();
    const currentHour = today.getHours();

    // Determine if current time is past 8:00 PM
    const isPast8PM = currentHour >= 20;

    for (let i = 0; i < 30; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dateString = nextDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        dates.push({
            day: nextDate.toLocaleDateString('en-US', { weekday: 'short' }),
            date: nextDate.getDate(),
            fullDate: dateString
        });
    }   

    // Update the day labels for the remaining dates
    if (dates.length > 0) {
        dates[0].day = 'Today';
    }
    if (dates.length > 1) {
        dates[1].day = 'Tomorrow';
    }

    if (isPast8PM) {
        dates.shift(); // Remove the first element if past 8:00 PM
    }

    return dates;
};


const Banner = ({ price}) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const endOfWeek = new Date();
            endOfWeek.setDate(now.getDate() + (7 - now.getDay())); // Next Sunday
            endOfWeek.setHours(0, 0, 0, 0); // Set time to start of the day

            const totalSeconds = Math.max((endOfWeek - now) / 1000, 0); // Ensure no negative values

            if (totalSeconds <= 0) {
                // If time is up, set all to 0
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(totalSeconds / (60 * 60 * 24));
            const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            const seconds = Math.floor(totalSeconds % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        calculateTimeLeft(); // Initial calculation
        const timer = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="Service_service__image-container__454hR HomeCleaning_home-cleaning__image-container__ldGb5 SingleService_single-service__image-container__MLy1y">
            <img
                alt="Service Image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="Service_service__image__zCdBy"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                }}
                sizes="100vw"
                src="service_files/slider.png"
            />
            <div role="presentation" className="Service_service__image-overlay__SKm6c"></div>
            <div role="presentation" className="Service_service__image-overlay__SKm6c"></div>
            <div className="Service_service__info-container__EfyoQ HomeCleaning_home-cleaning__info-container__Wxw_V">
                <p className="Service_service__price-success-container__XdG46">
                    <img
                        alt="service price badge"
                        loading="lazy"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        className="Service_service__price-notification-badge__ZM62N"
                        style={{ color: 'transparent' }}
                        src="service_files/notification-badge.svg"
                    />
                    <span className="Service_service__price__64E4I">AED {price}</span>
                    <span className="Service_service__price--strikeout__l6GdN">AED {price + 99}</span>
                </p>
                <p className="Service_service__title__gtQ72">Engineering Wood Floor Standing TV Unit</p>
            </div>
            <div className="count-down-timer_count-down-timer--desktop__1UXq_">
                <p className="count-down-timer_count-down-timer__offer-ends__4hz6d">Offer ends After</p>
                <div className="count-down-timer_count-down-timer__container__v_XDn">
                    <div className="count-down-timer_count-down-timer__individual-container__5_za5">
                        <p className="count-down-timer_count-down-timer__value__xYtpu">{timeLeft.days}</p>
                        <p className="count-down-timer_count-down-timer__heading__SvPLD">days</p>
                    </div>
                    <div className="count-down-timer_count-down-timer__individual-container__5_za5">
                        <p className="count-down-timer_count-down-timer__value__xYtpu">{timeLeft.hours}</p>
                        <p className="count-down-timer_count-down-timer__heading__SvPLD">hours</p>
                    </div>
                    <div className="count-down-timer_count-down-timer__individual-container__5_za5">
                        <p className="count-down-timer_count-down-timer__value__xYtpu">{timeLeft.minutes}</p>
                        <p className="count-down-timer_count-down-timer__heading__SvPLD">minutes</p>
                    </div>
                    <div className="count-down-timer_count-down-timer__individual-container__5_za5">
                        <p className="count-down-timer_count-down-timer__value__xYtpu">{timeLeft.seconds}</p>
                        <p className="count-down-timer_count-down-timer__heading__SvPLD">seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SizeSelector = ({ currentPrice, setPrice }) => {
    return (
        <div className="sub-services_sub-services__container__2LEb7">
            <p className="sub-services_sub-services__heading__J9ytw">Please select your size</p>
            <div className="sub-services_sub-services__list-container__UTd_b">
                {sizes.map((size, index) => (
                    <div key={index}>
                        <input
                            id={`select_sub_service_${size.id}`}
                            type="radio"
                            className="sub-service_sub-service__input__BVLhV"
                            name="select_sub_service"
                            value={size.id}
                            checked={size.price === currentPrice}
                            onChange={() => setPrice(size.price)}
                        />
                        <label
                            htmlFor={`select_sub_service_${size.id}`}
                            className="sub-service_sub-service__label-container__canYK"
                        >
                            <p className="sub-service_sub-service__label-heading__P3p_6">{size.label}</p>
                            <div className="sub-service_sub-service__label-price-info-container__nrnH3">
                                <p className="sub-service_sub-service__label-price__my_BJ">{`AED ${size.price}`}</p>
                                <p className="sub-service_sub-service__label-price__my_BJ sub-service_sub-service__label-price--strike-through__cyx_u">{`AED ${size.price + 99}`}</p>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};


const DateSelector = ({selectedTime, setSelectedTime, selectedDate, setSelectedDate}) => {

    const dates = getNext30Days();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Determine the 6 dates to display based on currentIndex
    const visibleDates = dates.slice(currentIndex, currentIndex + 6);
  
    // Handle navigation
    const handleNext = () => {
      if (currentIndex + 6 < dates.length) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return (
        <div class="date-time-selection_date-time-selection__container__SWAiQ">
                                        <div class="date-time-selection_date-time-selection__date-container__VgaMF">
                                          <p class="date-time-selection_date-time-selection__heading__amJqQ">When would you want the delivery?</p>
                                          <div class="FeaturedService_feature-slider__KJnM_ date-slider_date-slider__container__vmkb9">
                                             <div class="react-multi-carousel-list first-carousel-container " dir="ltr">
                                                <ul class="react-multi-carousel-track " style={{transition: "none;", overflow: "unset;", transform: "translate3d(0px, 0px, 0px);"}}>
                                                  
                                                {visibleDates.map((dateItem, index) => (
                                                    <li data-index="0" aria-hidden="false" style={{flex: "1 1 auto;", position: "relative;", width: "75px;" }} class="react-multi-carousel-item react-multi-carousel-item--active ">
                                                    <div>
                                                       <input type="radio" id={`select_day_${dateItem.fullDate}`} class="date-selector_date-selector__input__Rxng4" name="select_day" 
                                                        value={dateItem.fullDate} checked={dateItem.fullDate === selectedDate} onChange={() => setSelectedDate(dateItem.fullDate)}
                                                       />
                                                       
                                                       <label class="date-selector_date-selector__label__RYQaG" for={`select_day_${dateItem.fullDate}`}>
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 69 74" class="date-selector_date-selector__background-icon__P6VcE">
                                                             <path fill="#FFF" d="m-104.352-25.762 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm29 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm29-1 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414L9.337-23.348l4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L-5.265 73.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L24.735 73.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L54.735 73.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L84.735 73.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm-470-5 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm-15.595-12.19 6.828 8.624-4.312 3.414L-250.86 56.3l-4.312 3.414L-262 51.09l4.312-3.414 111.429-88.215 4.312-3.413zM-138.852-68l6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414z" opacity="0.7"></path>
                                                          </svg>
                                                          <div class="date-selector_date-selector__label-content__JAHN3">
                                                             <p class="date-selector_date-selector__day__l39bt">{dateItem.day}</p>
                                                             <p class="date-selector_date-selector__date__MG3aY">{dateItem.date}</p>
                                                          </div>
                                                       </label>
                                                    </div>
                                                 </li>
                                                ))}
                                                </ul>
                                             </div>


                                             <div class="custom-button-group">
                                                <button type="button" class="date-slider_date-slider__left-arrow-btn__FCB2A" onClick={() => handlePrev()}>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 10 17" class="date-slider_date-slider__left-arrow-icon__1iu8u">
                                                      <path fill="#636C89" d="m8.767 16.094.724-.725a.417.417 0 0 0 .123-.307.417.417 0 0 0-.123-.308L2.901 8.15l6.59-6.603a.456.456 0 0 0 .123-.315.456.456 0 0 0-.123-.314L8.767.207A.432.432 0 0 0 8.452.07a.39.39 0 0 0-.3.137L.508 7.836a.417.417 0 0 0-.123.308c0 .123.04.225.123.307l7.642 7.643a.41.41 0 0 0 .301.123.456.456 0 0 0 .315-.123z"></path>
                                                   </svg>
                                                </button>
                                                <button type="button" class="date-slider_date-slider__right-arrow-btn__7fsd9" onClick={() => handleNext()}>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 6 11" class="date-slider_date-slider__right-arrow-icon__xANTk date-slider_date-slider__right-arrow-icon--active__ZEyas">
                                                      <path fill="#6B13E3" d="M1.163 1.114 4.888 5.07c.136.12.193.276.193.43a.632.632 0 0 1-.17.43L1.162 9.885a.627.627 0 0 1-.885.024.624.624 0 0 1-.023-.883L3.595 5.5.252 1.973a.624.624 0 0 1 .025-.884.63.63 0 0 1 .886.025z"></path>
                                                   </svg>
                                                </button>
                                             </div>
                                          </div>
                                       </div>


                                        <div class="date-time-selection_date-time-selection__time-container__vtfCS">
                                          <p class="date-time-selection_date-time-selection__heading__amJqQ">Delivery Time?</p>
                                          <div class="time-selector_time-selector__container__NVQPc">


                                            { times.map((time, index) => (
                                                <div class="time-selector_time-selector__input-container__25smK">
                                                    <input type="radio" id={`select_time__${time.id}`} class="time-selector_time-selector__input__yONhi" name="select_time" 
                                                        value={time.value}
                                                        checked={time.value === selectedTime}
                                                        onChange={() => setSelectedTime(time.value)}
                                                        disabled={isPastTimeSlot(time.value, selectedDate)}
                                                    />
                                                
                                                <label className={`time-selector_time-selector__label__Lu94W ${isPastTimeSlot(time.value, selectedDate) ? 'disabled-text' : ''}`}
                                                
                                                
                                                for={`select_time__${time.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 131 36" class="time-selector_time-selector__background-icon__c_n0N">
                                                    <path fill="#FFF" d="m-46.352-41.762 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm29 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm29-1 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414L7.337-39.348l4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L-7.265 57.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L22.735 57.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L52.735 57.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413L82.735 57.491l-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm30 0 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm-470-5 6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.311-3.414zm-15.595-12.19 6.828 8.624-4.312 3.414L-192.86 40.3l-4.312 3.414L-204 35.09l4.312-3.414L-88.259-56.54l4.312-3.413zM-80.852-84l6.828 8.625-4.312 3.413-111.429 88.215-4.312 3.414-6.828-8.625 4.312-3.414 111.43-88.214 4.31-3.414z" opacity="0.2"></path>
                                                </svg>
                                                <p class="time-selector_time-selector__label-text__PzHLN">{time.label}</p>
                                                </label>
                                                </div>
                                            ))} 
                                            

                                          </div>
            </div>



        </div>
    );
}

const PaymentCard = ({selectedPrice, selectedDate, selectedTime}) => {

    const selectedSize = sizes.find(size => size.price === selectedPrice);
    const label = selectedSize ? selectedSize.label : 'Unknown Size';

    return (
      <div>
        <div className="fresnel-container fresnel-at-xs fresnel-:r0:" />
        <div className="home-cleaning-summary_home-cleaning-summary__container__JDlCn home-cleaning-summary_home-cleaning-summary__container--discount__KUEIf">
          <div className="fresnel-container fresnel-greaterThan-xs fresnel-:r1:">
            <p className="home-cleaning-summary_home-cleaning-summary__total-header___U5Xb">
              <span className="home-cleaning-summary_home-cleaning-summary__total-header-text__Z7qT_">Total: </span>
              <span className="home-cleaning-summary_home-cleaning-summary__total-header-amount__VYrLy">AED {selectedPrice}</span>
              <span className="home-cleaning-summary_home-cleaning-summary__total-header-amount--strike-through__Tvm85">AED {selectedPrice + 99}</span>
            </p>
          </div>
          <div className="fresnel-container fresnel-at-xs fresnel-:r2:" />
          <div className="home-cleaning-summary_home-cleaning-summary__offer-claim-container__rCqmH">
            <img
              alt="Coupon Applied successfully"
              loading="lazy"
              width="14"
              height="14"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="service_files/success-notification-tag.svg"
            />
            <p className="home-cleaning-summary_home-cleaning-summary__offer-claim-text__CPC63">
              <span>OFFER CLAIMED You save AED 99 </span>
            </p>
          </div>
          <div className="home-cleaning-summary_home-cleaning-summary__info-wrapper__15y9O">
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading__q0vXA">Product</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value__W4pLf">{label}</p>
            </div>
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading__q0vXA">Date</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value__W4pLf">{humanDate(selectedDate)}</p>
            </div>
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading__q0vXA">Time</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value__W4pLf">{selectedTime}</p>
            </div>
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading__q0vXA">Subtotal</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value__W4pLf home-cleaning-summary_home-cleaning-summary__info-container-value--price__ru_hw">AED {selectedPrice + 99}</p>
            </div>
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading__q0vXA">Promo SPLOFF99</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value__W4pLf home-cleaning-summary_home-cleaning-summary__info-container-value--coupon-discount-price__Y3VeD">-AED 99</p>
            </div>
          </div>
          <hr className="home-cleaning-summary_home-cleaning-summary__line-separator__bCR1_" />
          <div className="home-cleaning-summary_home-cleaning-summary__info-wrapper__15y9O">
            <div className="home-cleaning-summary_home-cleaning-summary__info-container__o3UGJ home-cleaning-summary_home-cleaning-summary__info-container--main__IFAgQ">
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-heading--main__hY5L8">Amount to pay</p>
              <p className="home-cleaning-summary_home-cleaning-summary__info-container-value--main___x7N5">AED {selectedPrice}</p>
            </div>
          </div>
          <div className="fresnel-container fresnel-greaterThan-xs fresnel-:r3:">
            <button type="submit" className="home-cleaning-summary_home-cleaning-summary__btn__gFd4p">
              <span>Pay {selectedPrice} AED</span>
              <img
                alt="Arrow Right Icon"
                loading="lazy"
                width="15.7"
                height="13.5"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src="service_files/right-arrow-white.svg"
              />
            </button>
          </div>
        </div>
      </div>
 );
};


const Widget = () => {
    
    let [selectedDate, setSelectedDate] = useState(getNext30Days()[0].fullDate);
    let [selectedTime, setSelectedTime] = useState();
    let [selectedPrice, setSelectedPrice] = useState(sizes[0].price);

    // if selectedDate changed then reset selectedTime

    useEffect(() => {
        setSelectedTime(null);
    }, [selectedDate]);

  return (
    <form class="Service_main__fdTFb SingleService_main__J1fRP">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <div class="Service_main__container__rI0IQ">
                            <Banner price={selectedPrice}/>
                            <div class="row">
                                <div class="col-lg-6 col-md-12"> 
                                    <div class="SingleService_single-service__detail-wrapper__QcWsK">
                                         <SizeSelector currentPrice={selectedPrice} setPrice={setSelectedPrice} />
                                         <DateSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />       
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12"> 
                                    <PaymentCard selectedPrice={selectedPrice} selectedDate={selectedDate} selectedTime={selectedTime} />
                                </div>
                            </div>
                        </div>
                     </div>
                     </div>
               </div>
            </form>
  )
}

export default Widget