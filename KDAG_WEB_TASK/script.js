// Data structure to hold the syllabus for each week
const syllabus = {
  "Week 1": [
    "I/O, Syntax, Basic Data Types, Control Flow and Function",
    "Numpy",
    "Matplotlib",
    "What is Machine learning",
    "Types of Machine learning",
    "Supervised Machine learning",
    "Practice Lab-1",
  ],
  "Week 2": [
    "Regression model",
    "Gradient Descent",
    "Practice on Regression Model and Gradient Descent",
    "Multiple Linear Regression",
    "Gradient Descent in Practice",
    "Practice on Multiple Linear Regression",
    "Practice Lab-2",
  ],
  "Week 3": [
    "Classification with Logistic Regression",
    "Cost Function for Logistic Regression",
    "Practice on Classification with Logistic Regression and Cost Function for Logistic Regression",
    "Gradient Descent for Logistic Regression",
    "Problem of OverFitting",
    "Practice on Gradient Descent for Logistic Regression and Problem of OverFitting",
    "Practice Lab-3",
  ],
};

// Function to update the syllabus content
function updateSyllabus(week) {
  const courseContent = document.querySelector(".course-content");
  const courseHeading = courseContent.querySelector(".course-heading");
  const coursesTop = courseContent.querySelector(".courses-top");
  const coursesBottom = courseContent.querySelector(".courses-bottom");

  // Update the heading
  courseHeading.textContent = week;

  // Clear existing content
  coursesTop.innerHTML = "";
  coursesBottom.innerHTML = "";

  // Add new syllabus items
  syllabus[week].forEach((item, index) => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.textContent = `Day ${index + 1}: ${item}`;

    // Append to the top or bottom section based on the day
    if (index < 4) {
      coursesTop.appendChild(courseItem);
    } else {
      coursesBottom.appendChild(courseItem);
    }
  });
}

// Event listeners for week navigation
// Event listeners for week navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    // Remove active class from all links
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.classList.remove("active");
    });
    // Add active class to the clicked link
    this.classList.add("active");

    const week = this.textContent.trim();
    updateSyllabus(week);
  });
});

// Initialize with Week 1 syllabus
updateSyllabus("Week 1");

function animateNumbers(targetElement, startValue, endValue, duration) {
  let current = startValue;
  const increment = (endValue - startValue) / duration;
  const element = document.getElementById(targetElement);

  const timer = setInterval(function () {
    current += increment;
    element.textContent = Math.round(current);

    if (current >= endValue) {
      clearInterval(timer);
      element.textContent = endValue;
    }
  }, 10); // Adjust the interval for smoother animation
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumbers("projectCount", 0, 4.5, 600); // Change the duration as needed
  animateNumbers("clientsCount", 0, 5347, 600);
  animateNumbers("hoursCount", 0, 88975, 600);
});

window.onload = function () {
  var image = document.querySelector(".col-10.col-sm-8.col-lg-4 img");
  var text = document.querySelector(".col-lg-8");

  image.classList.add("image-animate");
  text.classList.add("text-animate");
};

document.addEventListener("DOMContentLoaded", (event) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelector(".col-10.col-sm-8.col-lg-6 img")
            .classList.add("image-animate");
          entry.target.querySelector(".col-lg-6").classList.add("text-animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(document.querySelector(".ins-hero"));
});
