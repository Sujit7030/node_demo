


function customValidation(op){
     switch (op) {
        case 'S':
            
            break;
        case 'I':
            
            break;
        case 'D':
           
            break;
        default:
            break;
    }
    
    return true;
}

function formLoad(){
   var loginUser=getWorkItemData("userName");
	var processname= getWorkItemData("processname");
	var activityName=getWorkItemData("activityname");
	console.log("ProcessName::"+processname);
	console.log("activityName::"+activityName);
	console.log("loginUser::"+loginUser);
        /*setValues({"Extra4":"Test"},true); */
	setValues({"BranchName":"Kupandole"},true);
	setValues({"BranchCode":"5678"},true);
	setValues({"CSDName":"Sujit Yadav"},true);
    setValues({"CIFNameDC":"Sujit Yadav"},true);
	setValues({"AccNameAC":"Sujit Yadav"},true);
	setValues({"ProdTypeAC":"Savings"},true);
	setValues({"CIFIDAC":"87654321"},true);
	setValues({"AccInterestAC":"3200"},true);
	setValues({"BalanceAC":"32000"},true);
	setValues({"FreezeStatusAC":"Not Frozen"},true);
	setValues({"DormantStatusAC":"Active"},true);
	setValues({"LienAmountAC":"340"},true);
	setValues({"StatusCheques":"None"},true);
	setValues({"ASBALink":"Linked"},true);
	setValues({"ActiveFDNom":"Yes"},true);
	setValues({"ActiveLoanNom":"No"},true);
	setValues({"ActiveStatusAC":"Monthly Transfer"},true);
	setValues({"Extra3":"9086"},true); 
  
}

function onRowClick(tableId,rowIndex){
    return true;
}

function customListViewValidation(controlId,flag){
    return true;
}   

function listViewLoad(controlId,action){
    
}

function clickLabelLink(labelId){
    if(labelId=="createnewapplication"){
        var ScreenHeight=screen.height;
        var ScreenWidth=screen.width;
        var windowH=600;
        var windowW=1300;
        var WindowHeight=windowH-100;
        var WindowWidth=windowW;
        var WindowLeft=parseInt(ScreenWidth/2)-parseInt(WindowWidth/2);
        var WindowTop=parseInt(ScreenHeight/2)-parseInt(WindowHeight/2)-50;
        var wiWindowRef = window.open("../viewer/portal/initializePortal.jsp?NewApplication=Y&pid="+encode_utf8(pid)+"&wid="+encode_utf8(wid)+"&tid="+encode_utf8(tid)+"&fid="+encode_utf8(fid), 'NewApplication', 'scrollbars=yes,left='+WindowLeft+',top='+WindowTop+',height='+windowH+',width='+windowW+',resizable=yes')
    }
}
function allowPrecisionInText(){
    return 2;
}

function maxCharacterLimitInRichTextEditor(id){
    
    // return no of characters allowed as per condition based on id of the field
    return -1;
}
function showCharCountInRichTextEditor(id){
    
    // return true; -- To show character count in RTE
   // return false; -- To hide character count in RTE
   return true;
}
function onChangeEventInRichTextEditor(id){
    // Write code here on change of Rich Text Editor
}
function froalaEnterKeyOption(id){
    
    //When ENTER key is hit, a BR / DIV tag is inserted.
    //return FroalaEditor.ENTER_DIV
    //return FroalaEditor.ENTER_BR;
    return FroalaEditor.ENTER_P;
}

function showCustomErrorMessage(controlId,errorMsg){
    return errorMsg;
}

function resizeSubForm(buttonId){
    return {
        "Height":450,
        "Width":950
    };
}

function selectFeatureToBeIncludedInRichText(){
    return {
        'bold' :true,
        'italic':true,
        'underline':true,
        'strikeThrough':true,
        'subscript':true,
        'superscript':true,
        'fontFamily':true,
        'fontSize':true,
        'color':true,
        'inlineStyle':false,
        'inlineClass':false,
        'clearFormatting':true,
        'emoticons':false,
        'fontAwesome':false,
        'specialCharacters':false,
        'paragraphFormat':true,
        'lineHeight':true,
        'paragraphStyle':true,
        'align':true,
        'formatOL':false,
        'formatUL':false,
        'outdent':false,
        'indent':false,
        'quote':false,
        'insertLink':false,
        'insertImage':false,
        'insertVideo':false,
        'insertFile':false,
        'insertTable':true,
        'insertHR':true,
        'selectAll':true,
        'getPDF':false,
        'print':false,
        'help':false,
        'html':false,
        'fullscreen':false,
        'undo':true,
        'redo':true
        
    }
}

function allowDuplicateInDropDown(comboName){
    return false;
}

function postChangeEventHandler(controlId, responseData)
{
    
}
function isSectionWiseJSRequired()
{
    
  return false;  
}
function openBAMWindow(){
    var sessionId=getWorkItemData("sessionid");
    /*var URL="/bam/login/ExtendSession.app?CalledFrom=EXT&UserId="+getWorkItemData('userinfo').username+"&UserIndex="+getWorkItemData('userinfo').userindex+"&SessionId="+sessionId+"&CabinetName="+cabinetName+"&LaunchClient=RI&ReportIndex=36&AjaxRequest=Y&OAPDomHost=192.168.158.104:8080&CalledAs=MS&OAPDomPrt=http:";
    */
	/* userIndex
     * userName
     * cabinetName
     * sessionid--getWorkItemData("sessionid")
    */
    window.open(URL);
}


function restrictMultipleDocUpload(){
    return false;
}

function AccountClosureType(){
		var AccCloseType=getValue("ClosureType");
			if(AccCloseType=="Normal Account Closure"){
				setStyle("DeceasedFormSection","visible","false");
				setStyle("AccountCloseSection","visible","true");
				setStyle("ChecklistSection","visible","true");
				}
			else if(AccCloseType=="Deceased Account and Account Closure"){
				setStyle("DeceasedFormSection","visible","true");
				setStyle("AccountCloseSection","visible","false");
				setStyle("Extra1","visible","false");
				setStyle("AccountClosureBtn","visible","false");
				setStyle("ChecklistSection","visible","false");
					}
			else if(AccCloseType=='' || AccCloseType=='Select'){
				setStyle("DeceasedFormSection","visible","false");
				setStyle("AccountCloseSection","visible","false");
				setStyle("Extra1","visible","false");
				setStyle("AccountClosureBtn","visible","false");
				setStyle("ChecklistSection","visible","false");
				
			}
	}
	
function fetchAccDetailsForAccountClosureDeceasedCase(){
	var workitemNo=getWorkItemData("processinstanceid");
	var cifId = getValue("CIFIDDC");
	var input=workitemNo+"#"+cifId;
	var result = executeServerEvent("fetchKYCDetailsPersonal","click",input,true);
	var totalbalance = 0.0;
	if(result == ""){
		alert("Error in fetching CIF details. Please contact Administrator.");
	}else{		
		var jsonObj = JSON.parse(result);
		var accNo = jsonObj[0].acNo;
		console.log("accno::"+accNo);
		var accCount = accNo.split("%%",-1).length;
		console.log("count::"+accCount);		
		setValues({"CIFNameDC":jsonObj[0].name},true);
		for(i=0;i<accCount;i++){
			input = workitemNo +"#"+ accNo.split("%%",-1)[i];
			console.log("input::"+input);
			result = executeServerEvent("fetchAccDetails","click",input,true);
			console.log("result::"+result);
			if(result.split("#", -1).length == 2){
				alert(accNo.split("%%",-1)[i] + " " + result.split("#",-1)[1]);
				return false;
			}else{
				//when freeze is empty its NO freeze
				var freezeStatus = result.split('#', -1)[2];
				if(freezeStatus == ""){
					freezeStatus = "No";
				}
				//interest logic incase of ODA
				var interest = result.split('#', -1)[4];
				if(result.split('#', -1)[6] == "ODA"){
					interest= (parseFloat(result.split('#', -1)[4]) - parseFloat(result.split('#', -1)[3]));
					console.log("interest::"+interest);
				}
				addDataToGrid("table2" , [{"Account Name" : result.split('#', -1)[1] , "Account Number" : accNo.split("%%",-1)[i] , "Balance" : result.split('#', -1)[8],
											"Accrued Interest" : interest , "Freeze Status" : freezeStatus , "Product Code" : result.split('#', -1)[15], "Product Type" : result.split('#', -1)[6]}]);
											
				totalbalance = totalbalance + (parseFloat(interest) + parseFloat(result.split('#', -1)[8]));							
			}
		
		}
		setValues({"AccNoDC":jsonObj[0].acNo.replaceAll("%%",",")}, true);
		console.log("all123::"+getValue("AccNoDC"));
		setValues({"Balance":totalbalance},true);
		setStyle("DeceasedFetchBtn","disable","true");
		BalanceCheckAC();
	}
}
function BalanceCheckAC(){
		var Balance=getValue("Balance");
		var BMName=getValue("BMName");
		var SHName=getValue("StateHName");
		var HOName=getValue("HeadOName");
		var COOName=getValue("COOName");
		
		console.log(""+Balance);
		if(parseInt(Balance) <= 100000){
			setValues({"Extra4":"SD"},true);
			setValues({"Name":BMName},true);
			setValues({"Name":SHName},true);
			console.log(Extra4);
			console.log(SHName);
			
		}
		else if(parseInt(Balance) <= 500000){
			setValues({"Extra4":"BM"},true);
			setValues({"Name":BMName},true);
			console.log(BMName);
		}
		else if(parseInt(Balance) <= 3000000){
			setValues({"Extra4":"SH"},true);
			setValues({"Name":SHName},true);
			console.log(SHName);
		}
		else if(parseInt(Balance) <= 5000000){
			setValues({"Extra4":"HO"},true);
			setValues({"Name":HOName},true);
			console.log(HOName);
		}
		else if(parseInt(Balance) > 5000000){
			setValues({"Extra4":"COO"},true);
			setValues({"Name":COOName},true);
		}
	}
function NomineeMaintain(){
	var NomineeAOF= getValue("NmaintainedDC");
	console.log(NomineeAOF);
	if(NomineeAOF=="No"){
		setStyle("AcNomineename","disable","true");
		setStyle("NomineeRelationship","disable","true");
	}
	else {
		setStyle("AcNomineename","disable","false");
		setStyle("NomineeRelationship","disable","false");
	}
}


function fetchAccDetailsForBalanceTransferDeceasedCase(){
	var workitemNo=getWorkItemData("processinstanceid");
	var accNumber = getValue("TranAccNo");
	console.log("all::"+getValue("AccNoDC"));
	var input = workitemNo +"#"+ accNumber;
	console.log("input::"+input);
	var result = executeServerEvent("fetchAccDetails","click",input,true);
	console.log("result::"+result);
	if(result.split('#', -1)[0] == 'SUCCESS'){
		if(result.split("#", -1).length == 2){
			alert(result.split("#",-1)[1]);
			return false;
		}else{				
			setValues({"TranAccName":result.split('#', -1)[1]},true);
			var freezeStatus = result.split('#', -1)[2];
			if(freezeStatus == ""){
				setValues({"FStatusDC":'No'},true);
			}else{
				setValues({"FStatusDC":freezeStatus},true);
			}
			setValues({"AStatusDC":result.split('#', -1)[10]},true);
		}
		setStyle("button16","disable","true");
	}else{
		alert(result.split('@',-1)[0] + " : "+ result.split('@',-1)[2]);
	}								
}
function fetchAccountDetailsForAccountClosure(){
	var workitemNo=getWorkItemData("processinstanceid");
	var accNumber = getValue("AccNoAC");
	var accNumberTransfer = getValue("TAccNo");
	
	if(accNumberTransfer != ""){
		var input = workitemNo +"#"+ accNumberTransfer;
		console.log("input::"+input);
		var result = "";
		var flag = 0;
		if(accNumberTransfer.length == 14){
			result = executeServerEvent("fetchAccDetailsOffice","click",input,true);
			flag = 1;
		}else{
			result = executeServerEvent("fetchAccDetails","click",input,true);
		}
		console.log("result::"+result);
		if(result.split('#', -1)[0] == 'SUCCESS'){
			if(result.split("#", -1).length == 2){
				console.log("here");
				alert(result.split("#",-1)[1]);
				return false;
			}else{
				if(flag==1){
					setValues({"TAccNameAC":result.split('#', -1)[2]},true);
				}else{				
					setValues({"TAccNameAC":result.split('#', -1)[1]},true);
				}	
			}				
		}else{
			alert(result.split('@',-1)[0] + " : "+ result.split('@',-1)[2]);
		}
	}
	else{		 
		var input = workitemNo +"#"+ accNumber;
		console.log("input::"+input);
		var result = executeServerEvent("fetchAccDetails","click",input,true);
		console.log("result::"+result);
		if(result.split('#', -1)[0] == 'SUCCESS'){
			if(result.split("#", -1).length == 2){
				console.log("here");
				alert(result.split("#",-1)[1]);
				return false;
			}else{
				var cifvalidationForDeceasedCase = getValue("CIFIDDC");//value only populated when case of deceased accoutn closure.
				var fetchFlag = 0;
				if(cifvalidationForDeceasedCase.length > 0){
					if(cifvalidationForDeceasedCase == result.split('#', -1)[7]){
						fetchFlag = 1;
					}
				}else{
					fetchFlag = 1;
				}
				if(fetchFlag == 1){
					setValues({"AccNameAC":result.split('#', -1)[1]},true);
					setValues({"ProdTypeAC":result.split('#', -1)[6]},true);
					setValues({"CIFIDAC":result.split('#', -1)[7]},true);
					setValues({"AccInterestAC":result.split('#', -1)[4]},true);
					if(result.split('#', -1)[6] == "ODA"){
						console.log((parseFloat(result.split('#', -1)[4]) - parseFloat(result.split('#', -1)[3])));
						setValues({"AccInterestAC":(parseFloat(result.split('#', -1)[4]) - parseFloat(result.split('#', -1)[3]))},true);
					}
					
					setValues({"BalanceAC":result.split('#', -1)[8]},true);
					var freezeStatus = result.split('#', -1)[2];
					if(freezeStatus == ""){
						setValues({"FreezeStatusAC":'No'},true);
					}else{
						setValues({"FreezeStatusAC":freezeStatus},true);
					}
					setValues({"DormantStatusAC":result.split('#', -1)[5]},true);
					setValues({"LienAmountAC":result.split('#', -1)[11]},true);
					setValues({"StatusCheques":result.split('#', -1)[14]},true);
					setValues({"ASBALink":result.split('#', -1)[9]},true);
					setValues({"ActiveFDNom":result.split('#', -1)[12]},true);
					setValues({"ActiveLoanNom":result.split('#', -1)[13]},true);
					setValues({"ActiveStatusAC":result.split('#', -1)[10]},true);
					disableEnableCompleteBttnInAccountClosure();
				}else{
					alert("Account number entered donot match the CIF.");
				}
			}
		}else{
			alert(result.split('@',-1)[0] + " : "+ result.split('@',-1)[2]);
		}							
	}
}
function verifySign(){
	var processname= getWorkItemData("processname");
	var winame = getWorkItemData("processInstanceId");
	var accNo;
	//var url="/SignVerification/index.jsp?AccId="+accNo+"&wiName="+winame;
	if(processname=="Bank_Statement_Request"){
		accNo=getValue('AccountNumber_SRF');
	}
	else if(processname=="Stop_Cheque"){
		accNo=getValue('AccountNo_SCP');
	}
	else if(processname=="Cheque_Requisition"){
		accNo=getValue('AcNo_ExtTable');
	}
	else if(processname=="Change_Account_Type"){
		accNo=getValue('AcNo_ExtTable');
	}
	else if(processname=="BalanceCertificateReq"){
		accNo=getValue('AccountNo_BCR');
	}
	else if(processname=="DebitCreditCard"){
		accNo=getValue('AccountNo_DC');
	}
	else if(processname=="KYC_Maintainance_Forms"){
		accNo=getValue('Account_Number');
	}
	else if(processname=="Account_Maintenance"){
		var Formtype= getValue("Formtype");
		if (Formtype=="Amount Lien Mark/Release"){
		accNo=getValue('AccNo2');
		}
		else if(Formtype=="Account Freeze/Unfreeze"){
		accNo=getValue('AccNo3');
		}
		else if(Formtype=="Account Name Maintenance"){
		accNo=getValue('AccNoN');
		}
		else if(Formtype=="Other Maintenance"){
		accNo=getValue('OAccNo');
		}
	}
	else if(processname=="Account_Closure"){
		accNo=getValue('AccNoAC');
	}
	else if(processname=="CASBA"){
		accNo=getValue('AccountNo');
	}
	else if(processname=="TDS_Certificate"){
		accNo=getValue('AccountNo');
	}
	else if(processname=="Locker"){
		var LockerType= getValue("LockerType");
		if (LockerType=="New Locker Request Registration"){
		accNo=getValue('CNAccNO');
		}
		else if(LockerType=="Locker Servicing Maintenance"){
		accNo=getValue('CCOAccNo');
		}
		
	}
	else if(processname=="Cheque_Destruction"){
		accNo=getValue('AccountNo');
	}
	else if(processname=="MCorFCY_Issuance"){
		var Formtype= getValue("IssuanceRequesttype");
		if (Formtype=="Managers Cheque Issuance Entry"){
		accNo=getValue('PurchaserAccountID');
		}
		else if (Formtype=="FCY DD Issuance"){
		accNo=getValue('OperativeAccount');
		}
		
	}
	if(accNo==""){
		alert("Please enter Account No!!!");
		return false;
	}else {
		window.open("/SignVerification/index.jsp?AccId="+accNo+"&wiName="+winame, "_blank",
		"toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=550,height=550");
	}
	
}
function BalanceTrasferType(){
		var DisposalType=getValue("DisposalIn");
			if(DisposalType=="Cash" || DisposalType=="Account transfer to NMB Account Number"){
				setStyle("TAccNo","visible","true");
				setStyle("button8","visible","true");
				setStyle("TAccNameAC","visible","true");
				
				setStyle("label6","visible","false");
				setStyle("OtherBAccNo","visible","false");
				setStyle("OtherBAccNm","visible","false");
				setStyle("TBankBranchAC","visible","false");
				setStyle("OtherBName","visible","false");
				}
			else if(DisposalType=="Account transfer to another bank"){
				setStyle("TAccNo","visible","true");
				setStyle("button8","visible","true");
				setStyle("TAccNameAC","visible","true");
				
				setStyle("label6","visible","true");
				setStyle("OtherBAccNo","visible","true");
				setStyle("OtherBAccNm","visible","true");
				setStyle("TBankBranchAC","visible","true");
				setStyle("OtherBName","visible","true");
				}
			else if(DisposalType=='' || DisposalType=='Select'){
				setStyle("TAccNo","visible","false");
				setStyle("button8","visible","false");
				setStyle("TAccNameAC","visible","false");
				
				setStyle("label6","visible","false");
				setStyle("OtherBAccNo","visible","false");
				setStyle("OtherBAccNm","visible","false");
				setStyle("OtherBName","visible","false");
				setStyle("TBankBranchAC","visible","false");
			}
	}
	function updateAccountClosure(){								 
	var workitemNo=getWorkItemData("processinstanceid");
	var accNumber = getValue("AccNoAC");
	var amt = getValue("BalanceAC");
	var interest = getValue("AccInterestAC");
	var transferFlag = "Y";
	var accNumberTransfer = getValue("TAccNo");
	if(parseFloat(amt) == 0.0 && parseFloat(interest) == 0.0){
		 transferFlag = "N";
		 accNumberTransfer = "";
	}	
	
	var input = workitemNo +"#"+ accNumber +"#"+ transferFlag +"#"+ accNumberTransfer;
	console.log("input::"+input);
	var result = executeServerEvent("accountClosure","click",input,true);
	console.log("result::"+result);
	if(result.split('#', -1)[0] == 'SUCCESS'){		
		setValues({"Extra1":'Success'},true);
		setStyle("AccountClosureBtn","disable","true");
		setValues({"Extra3":result.split('#', -1)[2]},true);
		alert(result.split('#', -1)[1] + " closed Successfully");
	}else{
		setValues({"Extra1":'Failure'},true);
		alert(result.split('@',-1)[0] + " : "+ result.split('@',-1)[2]);
	}
													 
}

