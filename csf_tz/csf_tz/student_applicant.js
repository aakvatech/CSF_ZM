frappe.ui.form.on('Student Applicant', {
	onload: function(frm) {
		frm.trigger("setup_btns");
	},
	refresh: function(frm) {
		frm.trigger("setup_btns");
	},
	setup_btns: function(frm) {
		if(frm.doc.docstatus== 1 ) {
			frm.clear_custom_buttons();
			if( ["Applied", "Awaiting Registration Fees"].includes(frm.doc.application_status)) {
				frm.add_custom_button(__("Reject"), function() {
					frm.set_value("application_status", "Rejected");
					frm.save_or_update();
				}, 'Student Applicant Actions');
			}
			if( ["Applied", "Rejected"].includes(frm.doc.application_status)) {
				frm.add_custom_button(__("Awaiting Registration Fees"), function() {
					frm.set_value("application_status", "Awaiting Registration Fees");
					frm.save_or_update();
				}, 'Student Applicant Actions');
			}
		}
	},
	
});