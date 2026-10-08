const testButton = document.getElementById("testButton");
const result = document.getElementById("result");

testButton.addEventListener("click", async () => {

    try {

        const response = await fetch("/api/test");

        const data = await response.json();

        result.textContent = data.message;

    } catch (error) {

        console.error(error);

        result.textContent = "Backend connection failed.";

    }

});