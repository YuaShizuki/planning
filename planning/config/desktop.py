# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		"planning": {
			"color": "PaleVioletRed",
			"icon": "icon-umbrella",
			"type": "page",
			"link": "planning",
			"label": _("planning"),
		}
	}
