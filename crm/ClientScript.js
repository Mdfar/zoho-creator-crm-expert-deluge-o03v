/**

Zoho CRM Client Script - Fix for buggy validation

Module: Deals | Event: OnSave */

var amount = ZOHO.CRM.UI.Record.getValue("Amount"); var stage = ZOHO.CRM.UI.Record.getValue("Stage");

// Fix: Logic previously failed to account for null values and data types if (stage === "Closed Won" && (!amount || amount <= 0)) { ZOHO.CRM.UI.Record.showError("Amount must be greater than zero for Closed Won deals."); return false; // Prevent save }

return true;