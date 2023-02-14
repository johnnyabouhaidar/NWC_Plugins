
import requests
import json

##generate token

def GenerateToken():
	client_id = 'c8a76f93-8c6b-411c-8d44-589a92ca1c90'
	client_secret = 'wpQgnnfZOk0spcZfNlCulf0ahFCYTe7bJGBepUBsp8s='
	tenant =  'iccleb' # e.g. https://tenant.sharepoint.com
	tenant_id = 'b1348f50-030e-4ea1-8d44-493ee19f88d8'  
	client_id = client_id + '@' + tenant_id

	#574333c5-3330-4695-ae41-260520a0724a@b1348f50-030e-4ea1-8d44-493ee19f88d8

	data = {
		'grant_type':'client_credentials',
		'resource': "00000003-0000-0ff1-ce00-000000000000/" + tenant + ".sharepoint.com@" + tenant_id, 
		'client_id': client_id,
		'client_secret': client_secret,
	}
	headers = {
		'Content-Type':'application/x-www-form-urlencoded'
	}

	url = "https://accounts.accesscontrol.windows.net/b1348f50-030e-4ea1-8d44-493ee19f88d8/tokens/OAuth/2"
	r = requests.post(url, data=data, headers=headers)
	json_data = json.loads(r.text)
	print(json_data)
	
	return(json_data['access_token'])
	
def GetListItems(list_name):
	headers = {
		'Authorization': "Bearer " + GenerateToken(),
		'Accept':'application/json;odata=verbose',
		'Content-Type': 'application/json;odata=verbose'
	}
	url = "https://iccleb.sharepoint.com/sites/NintexTrainee/JohnnyAbouHaidar/_api/web/lists/GetByTitle('list2read')/items"
	l = requests.get(url, headers=headers)
    
	print(l.text)
	return(l.text)

GetListItems("LR-PersonnelFiles_sys")
