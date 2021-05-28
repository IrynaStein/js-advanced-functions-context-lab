/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
  let employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

// ### `createEmployeeRecords`

// * **Argument(s)**
//   * `Array` of `Arrays`
// * **Returns**
//   * `Array` of `Object`s
// * **Behavior**
//   * Converts each nested `Array` into an employee record using
//     `createEmployeeRecord` and accumulates it to a new `Array`


function createEmployeeRecords(arrayOfRecords){
    const employeeRecords = arrayOfRecords.map(employee => {
        return createEmployeeRecord(employee);
    })
    return employeeRecords;


}

// ### `createTimeInEvent`

// * **Argument(s)**
//   * A date stamp (`"YYYY-MM-DD HHMM"`), where time is expressed in [24-hour standard][miltime]
// * **Returns**
//   * The record that was just updated
// * **Behavior**
//   * Add an `Object` with keys:
//     * `type`: Set to `"TimeIn"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this
}