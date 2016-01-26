app.filter('myFilter', function () {
    return function (items, department, jobTitle) {

        if ((department == "") && (jobTitle == "")) {
            return items;
        }

        if (department == "All Departments") {
            if (jobTitle == "All Job Titles" || jobTitle == "") {
                return items;
            } else {
                var result = [];
                for (i = 0; i < items.length; i++) {
                    try {
                        if (items[i].user.jobTitle.indexOf(jobTitle) > -1) {

                            result.push(items[i]);
                        }
                    } catch (err) {
                        console.log("Parsing exception");
                    }

                }
                return result;
            }
        }

        if (jobTitle == "All Job Titles") {
            if (department == "All Departments" || department == "") {
                return items;
            } else {
                var result = [];
                for (i = 0; i < items.length; i++) {
                    try {
                        if (items[i].user.department.indexOf(department) > -1) {

                            result.push(items[i]);
                        }
                    } catch (err) {
                        console.log("Parsing exception");
                    }

                }
                return result;
            }
        }

        var result = [];
        if (department == "")
            department = "--";
        if (jobTitle == "")
            jobTitle = "--";

        for (i = 0; i < items.length; i++) {
            try {
                if ((items[i].user.department.indexOf(department) > -1) && (items[i].user.jobTitle.indexOf(jobTitle) > -1)) {

                    result.push(items[i]);
                }
            } catch (err) {
                console.log("Parsing exception");
            }

        }
        return result;
    }
});
