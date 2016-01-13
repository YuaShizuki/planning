import frappe

@frappe.whitelist()
def get_awb_number(consignee):
	return ""