const url = "https://www.boredapi.com/api/activity";
const btn = document.querySelector("button");
const resultContainer = document.querySelector("#result"); 

btn.addEventListener("click", async () => {
  try {
    const work = await showWork(url);
    console.log(work);
    resultContainer.innerText = work;
  } catch (e) {
    console.log("Error:", e);
    resultContainer.innerText = "Error occurred.";
  }
});

async function showWork(url) {
  try {
    const res = await axios.get(url);
    return res.data.activity;
  } catch (e) {
    console.log("Error:", e);
    return "/";
  }
}
