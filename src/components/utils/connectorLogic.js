export const connectWithDelay = async () => {
    const buttons = document.querySelectorAll("button");
    const connectButtons = Array.from(buttons).filter((btn) =>
      btn.innerText.includes("Connect")
    );
  
    if (connectButtons.length === 0) {
      alert("No connectable profiles available.");
      return;
    }
  
    for (let i = 0; i < connectButtons.length; i++) {
      try {
        connectButtons[i].click();
        console.log(`Connection request sent to profile ${i + 1}`);
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 2000 + 1000) // 1-3 second delay
        );
      } catch (error) {
        console.error(`Failed to connect to profile ${i + 1}`, error);
      }
    }
  
    alert("All connection requests have been sent.");
  };
  