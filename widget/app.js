/**

Fix for Zoho Creator Widget Javascript Bug

Handles asynchronous data submission and UI feedback */ ZOHO.CREATOR.init().then(function(data) { const config = ZOHO.CREATOR.getConfig();

document.getElementById("submit-btn").addEventListener("click", async function() { const recordData = { "data": { "Name": document.getElementById("name").value, "Email": document.getElementById("email").value } };

 try {
     // Fix: Added proper error handling and async wait for the Zoho SDK
     const response = await ZOHO.CREATOR.API.addRecord({
         appName: "Staqlt_Automation",
         formName: "Client_Feedback",
         data: recordData
     });

     if (response.code === 3000) {
         console.log("Record added successfully");
         ZOHO.CREATOR.UTIL.showAlert("Success!", "Data synced to CRM.", "success");
     } else {
         throw new Error(response.message || "Unknown error occurred");
     }
 } catch (error) {
     console.error("Widget Error:", error);
     ZOHO.CREATOR.UTIL.showAlert("Sync Failed", error.message, "error");
 }


}); });