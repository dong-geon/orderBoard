(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_02");
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_02","20","20","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문 상태");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStatNm","200","25","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00","20","65","164","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문 상품");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","200","70","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("ITEM_CD");
            obj.set_datacolumn("ITEM_NM");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_changeOrd","41","125","122","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문 수정");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","224","125","122","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_02_onload = function(obj,e)
        {
        	// alert("onload 함수 실행");
        	//this.alert(this.getOwnerFrame().ordNo);
        	// 1. 주문상태 콤보박스 초기화
        	this.fn_setOrdStatCbo();

        	// 2. 주문상태 콤보박스 초기화
        	this.fn_setItemCbo();
        };

        this.btn_changeOrd_onclick = function(obj,e)
        {
        	// alert("주문 수정 버튼 클릭");
        	this.ds_updOrd.clearData();
        	this.ds_updOrd.addRow();
        	this.ds_updOrd.setColumn(0, "ORD_STAT_CD", this.cbo_ordStatNm.value);
        	this.ds_updOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);
        	this.ds_updOrd.setColumn(0, "ORD_NO", this.getOwnerFrame().ordNo);
        	trace("ORD_STAT_CD		:" + this.ds_updOrd.getColumn(0,"ORD_STAT_CD"));
        	trace("ITEM_CD		:" + this.ds_updOrd.getColumn(0,"ITEM_CD"));
        	trace("ORD_NO		:" + this.ds_updOrd.getColumn(0,"ORD_NO"));

        	var strSvcId = "updateOrdList";
        	var strSvcUrl = "updateOrdList.do";
        	var inData = "ds_updOrd=ds_updOrd";
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
        	// alert("닫기 버튼 클릭");
        	this.close();
        };

        /*
        * 사용자 정의 함수
        */
        this.fn_setOrdStatCbo = function()
        {
        	this.ds_searchCombo.clearData();
        	this.ds_searchCombo.addRow();
        	this.ds_searchCombo.setColumn(0, "CD_VAL", "001");
        	trace("ds_searchCombo	:" + this.ds_searchCombo.getColumn(0,"CD_VAL"));

        	var strSvcId = "selectCommonCode";
        	var strSvcUrl = "selectCommonCode.do";
        	var inData = "ds_search=ds_searchCombo";
        	var outData = "ds_ordStatCombo=ds_commonCode";
        	var strAvg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId	,
        						strSvcUrl	,
        						inData		,
        						outData		,
        						strAvg		,
        						callBackFnc);
        }

        this.fn_setItemCbo = function()
        {
        	var strSvcId = "selectItemList";
        	var strSvcUrl = "selectItemList.do";
        	var inData = "";
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
        *CallBack Function(서버 수신 후 후처리 영역)
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0){
        		alert("작업 실패 에러코드\n " + errorCode + "\n" + errorMsg);
        		return 0;
        	}
        	switch(svcID)
        	{
        		case "selectCommonCode" :
        			this.ds_ordStatCombo.insertRow(0); // 0번째 row에 라인 삽입
        			this.ds_ordStatCombo.setColumn(0,"CD_VAL1", "");
        			this.ds_ordStatCombo.setColumn(0,"CD_NM1", "전체");
        			break;

        		case "updateOrdList" :
        			this.alert("주문 수정 완료");
        			this.close();
        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_02_onload,this);
            this.sta00_02.addEventHandler("onclick",this.sta00_02_onclick,this);
            this.sta00_02_00.addEventHandler("onclick",this.sta00_02_onclick,this);
            this.btn_changeOrd.addEventHandler("onclick",this.btn_changeOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
