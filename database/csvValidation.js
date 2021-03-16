import CSVFileValidator from 'csv-file-validator';
var file = new File('../questions-1-copy.csv')

CSVFileValidator(file, config)
    .then(csvData => {
        // csvData.data // Array of objects from file
        console.log(csvData.inValidMessages) // Array of error messages
    })
    .catch(err => {})

    const config = {
      headers: [
          {
              name: 'Id',
              inputName: 'id',
              required: true,
              unique: true,

              uniqueError: function (headerName, rowNumber, columnNumber) {
                return `${headerName} is not unique in the ${rowNumber} row / ${columnNumber} column`
            },
              requiredError: function (headerName, rowNumber, columnNumber) {
                  return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
              }
          },
          {
              name: 'Product Id',
              inputName: 'product_id',
              required: true,
              requiredError: function (headerName, rowNumber, columnNumber) {
                return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
            }
          },
          {
            name: 'Body',
            inputName: 'body',
            required: true,
            requiredError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
          },
            validate: function(body) {
                return isBodyValid(body)
            },
            validateError: function (headerName, rowNumber, columnNumber) {
                return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
            }
        },
        {
          name: 'Date Written',
          inputName: 'date_written',
          required: true,
            requiredError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
          },
          validate: function(date) {
              return isDateValid(date)
          },
          validateError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
          }
      },
      {
        name: 'Asker Name',
        inputName: 'asker_name',
        required: true,
            requiredError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
          },
        validate: function(name) {
            return isDateValid(name)
        },
        validateError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
        }
    },
          {
              name: 'Email',
              inputName: 'asker_email',
              required: true,
            requiredError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
          },
              validate: function(email) {
                  return isEmailValid(email)
              },
              validateError: function (headerName, rowNumber, columnNumber) {
                  return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
              }
          },
          {
            name: 'Reported',
            inputName: 'reported',
            required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        },
            validate: function(reported) {
                return isReportedValid(reported)
            },
            validateError: function (headerName, rowNumber, columnNumber) {
                return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
            }
        },
        {
          name: 'Helpful',
          inputName: 'helpful',
          required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
      },
          validate: function(helpful) {
              return isHelpfulValid(helpful)
          },
          validateError: function (headerName, rowNumber, columnNumber) {
              return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
          }
      },

      ]
  }


var isEmailValid = () => {
  return true
}

var isBodyValid = () => {
  return true
}
var isNameValid = () => {
  return true
}
var isReportedValid = () => {
  return true
}
var isHelpfulValid = () => {
  return true
}
var isDateValid = () => {
  return true
}

