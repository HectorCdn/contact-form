const formElement = document.querySelector("#myform");

            formElement.addEventListener("submit", (e) => {
                e.preventDefault();

                const formData = new FormData(formElement);

                formData.forEach((value, key) => {
                    console.log(key + ": " + value);
                });

                const isChecked = formElement.querySelector(
                    'input[name="check"]'
                ).checked;
                if (isChecked) {
                    console.log("truth");
                } else {
                    console.log("Checkbox not checked");
                }
            });