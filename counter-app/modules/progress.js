let circle, radius, circumference;

export function initProgress() {
  circle = document.querySelector(".progress-ring__circle");
  radius = circle.r.baseVal.value;
  circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;
}

export function setProgress(percent) {
  if (!circle) return;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
