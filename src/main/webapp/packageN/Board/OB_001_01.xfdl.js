(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCustGb", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGbCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_03","20","13","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","224","325","122","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","41","325","122","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문 등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","200","260","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("ITEM_CD");
            obj.set_datacolumn("ITEM_NM");
            obj.set_displaynulltext("선택");
            obj.set_visible("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00","20","255","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문 상품");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","200","215","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_custGbCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_visible("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","200","17","170","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_inputtype("normal");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","200","167","170","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_02","20","163","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주소");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","200","117","170","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_inputtype("normal");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_01","20","113","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("생년월일/사업자번호");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","200","67","170","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("normal");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_00","20","63","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("휴대폰번호");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","20","210","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("고객 구분");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");
        	//주문 등록을 위한 고객구분, 주문상품 콤보박스 초기화

        	// 1. 고객구분 콤보박스에 출력할 데이터들을 TB_CD_MST 테이블로부터 갑슬 조회해 오자.
        	// 이 로직은 앞서 OB_001.xfdl onload 에서 만든 경험이 있다. 이미 만들어둔 로직 그대로 사용하자.
        	this.fn_setCustGbCbo();

        	// 2. 주문상품 리스트를 TB_ITEM 테이블로부터 조회하여 콤보박스 안의 데이터를 채워주자
        	// 방법은 위 TB_CD_MST 테이블을 조회해 오는 방식과 유사하다.
        	this.fn_setItemCbo();
        };



        this.btn_regOrd_onclick = function(obj,e)
        {
        	// alert("주문 등록 버튼 클릭");
        	// TB_ORD, TB_CUST에 INSERT 그러나 이미 고객정보에 등록된 사람이면 TB_CUST에는 등록하지 않는다

        	// 1. 주문등록을 위해 입력받은 6개의 값을 데이터셋에 담아 서버로 전송해야한다.
        	// 따라서, 데이터셋을 만들고 사용자가 입력한 6개의 값을 담아주자.
        	this.ds_regOrd.clearData();
        	this.ds_regOrd.addRow();
        	this.ds_regOrd.setColumn(0, "CUST_NM", this.edt_custNm.value);
        	this.ds_regOrd.setColumn(0, "PHONE", this.edt_phone.value);
        	this.ds_regOrd.setColumn(0, "BIR_BIZ_NO", this.edt_birBizNo.value);
        	this.ds_regOrd.setColumn(0, "ADDR", this.edt_addr.value);
        	this.ds_regOrd.setColumn(0, "CUST_GBCD", this.cbo_custGbNm.value);
        	this.ds_regOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);

        	trace("CUST_NM		:" + this.ds_regOrd.getColumn(0,"CUST_NM"));
        	trace("PHONE		:" + this.ds_regOrd.getColumn(0,"PHONE"));
        	trace("BIR_BIZ_NO		:" + this.ds_regOrd.getColumn(0,"BIR_BIZ_NO"));
        	trace("ADDR		:" + this.ds_regOrd.getColumn(0,"ADDR"));
        	trace("CUST_GBCD		:" + this.ds_regOrd.getColumn(0,"CUST_GBCD"));
        	trace("ITEM_CD		:" + this.ds_regOrd.getColumn(0,"ITEM_CD"));


        	// 2. 세팅한 ds_regOrd 데이터셋을 서버로 전송해서 주문등록을 해보자.
        	var strSvcId = "insertOrdList";
        	var strSvcUrl = "insertOrdList.do";
        	var inData = "ds_regOrd=ds_regOrd";
        	var outData = "";		// 서버로 부터 받을 데이터는 없다.
        	var strAvg = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId	,
        						strSvcUrl	,
        						inData		,
        						outData		,
        						strAvg		,
        						callBackFnc);

        };



        this.btn_exit_onclick = function(obj,e)
        {
        	//alert("닫기 버튼 클릭");
        	this.close();
        };

        /*
        * 사용자 정의 함수
        */
        this.fn_setCustGbCbo = function()
        {
        	this.ds_searchCustGb.clearData();
        	this.ds_searchCustGb.addRow();
        	this.ds_searchCustGb.setColumn(0, "CD_VAL", "002");

        	var strSvcId = "selectCommonCode";
        	var strSvcUrl = "selectCommonCode.do";
        	var inData = "ds_search=ds_searchCustGb";
        	var outData = "ds_custGbCombo=ds_commonCode";

        	var strAvg = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId	,
        						strSvcUrl	,
        						inData		,
        						outData		,
        						strAvg		,
        						callBackFnc);
        };

        this.fn_setItemCbo = function()
        {
        	// where절이 필요 없기 때문에 dataset이 필요 없다.
        	var strSvcId = "selectItemList";
        	var strSvcUrl = "selectItemList.do";
        	var inData = ""; // 서버로 전송할 데이터가 없음
        	var outData = "ds_itemCombo = ds_itemCombo";

        	var strAvg = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId	,
        						strSvcUrl	,
        						inData		,
        						outData		,
        						strAvg		,
        						callBackFnc);
        }

        /*
        * fnCallback함수 (서버 수신 후 후처리 영역)
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        		case "selectCommonCode":
        			trace("고객구분 콤보박스 세팅 완료");
        			break;
        		case "selectItemList":
        			trace("주문상품 콤보박스 세팅 완료");
        			break;
        		case "insertOrdList":
        			this.alert("주문 등록 완료");
        			this.close();
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta00_03.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.sta00_02_00.addEventHandler("onclick",this.sta00_02_onclick,this);
            this.sta00_03_02.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta00_03_01.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta00_03_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta00_02.addEventHandler("onclick",this.sta00_02_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
