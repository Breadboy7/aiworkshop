// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  // Convert the server's whole-day interval to a calendar-day count.
  const daysLeft = opportunity.days_left + 1;
  let labelText;
  let labelClass;

  if (daysLeft < 0) {
    labelText = "Overdue";
    labelClass = "deadline-overdue";
  } else if (daysLeft === 0) {
    labelText = "Due today";
    labelClass = "deadline-upcoming";
  } else if (daysLeft <= 7) {
    labelText = `Due in ${daysLeft} ${daysLeft === 1 ? "day" : "days"}`;
    labelClass = "deadline-upcoming";
  } else {
    return;
  }

  const label = document.createElement("span");
  label.className = `deadline-label ${labelClass}`;
  label.textContent = labelText;
  cell.appendChild(document.createElement("br"));
  cell.appendChild(label);
}
