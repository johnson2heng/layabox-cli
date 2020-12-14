export class Sprite_DrawShapes {
    private sp: Laya.Sprite;
    private skin: string = "images/combobox.png";

    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya3D.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight);

        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;

        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";

        this.drawSomething();
        Laya.loader.load(this.skin, Laya.Handler.create(this, this.drawCombobox));
    }

    private onLoadComplete(): void {
        var cb: Laya.ComboBox = this.createComboBox(this.skin);
        cb.autoSize = true;
        cb.pos((Laya.stage.width - cb.width) / 2, 100);
        cb.autoSize = false;
    }

    private createComboBox(skin: String): Laya.ComboBox {
        var comboBox: Laya.ComboBox = new Laya.ComboBox(this.skin, "item0,item1,item2,item3,item4,item5");
        comboBox.labelSize = 30;
        comboBox.itemSize = 25;
        comboBox.selectHandler = new Laya.Handler(this, this.onSelect, [comboBox]);
        Laya.stage.addChild(comboBox);

        return comboBox;
    }

    private onSelect(cb: Laya.ComboBox): void {
        console.log("选中了： " + cb.selectedLabel);
    }

    private drawCombobox() {
        Laya.loader.load(
            "images/combobox.png",
            Laya.Handler.create(this, function () {
                let comboBox = new Laya.ComboBox("images/combobox.png", "item0,item1,item2,item3,item4,item5");
                comboBox.pos((Laya.stage.width - comboBox.width) / 2, 100);
                Laya.stage.addChild(comboBox);
            })
        );
    }

    private drawSomething(): void {
        this.sp = new Laya.Sprite();
        Laya.stage.addChild(this.sp);
        //画线
        this.sp.graphics.drawLine(10, 58, 146, 58, "#ff0000", 3);
        //画连续直线
        this.sp.graphics.drawLines(176, 58, [0, 0, 39, -50, 78, 0, 117, 50, 156, 0], "#ff0000", 5);
        //画曲线
        this.sp.graphics.drawCurves(352, 58, [0, 0, 19, -100, 39, 0, 58, 100, 78, 0, 97, -100, 117, 0, 136, 100, 156, 0], "#ff0000", 5);
        //画矩形
        this.sp.graphics.drawRect(10, 166, 166, 90, "#ffff00");
        //画多边形
        this.sp.graphics.drawPoly(264, 166, [0, 0, 60, 0, 78.48, 57, 30, 93.48, -18.48, 57], "#ffff00");
        //画三角形
        this.sp.graphics.drawPoly(400, 166, [0, 100, 50, 0, 100, 100], "#ffff00");
        //画圆
        this.sp.graphics.drawCircle(98, 332, 50, "#00ffff");
        //画扇形
        this.sp.graphics.drawPie(240, 290, 100, 10, 60, "#00ffff");
        //绘制圆角矩形，自定义路径
        this.sp.graphics.drawPath(
            400,
            310,
            [
                ["moveTo", 5, 0],
                ["lineTo", 105, 0],
                ["arcTo", 110, 0, 110, 5, 5],
                ["lineTo", 110, 55],
                ["arcTo", 110, 60, 105, 60, 5],
                ["lineTo", 5, 60],
                ["arcTo", 0, 60, 0, 55, 5],
                ["lineTo", 0, 5],
                ["arcTo", 0, 0, 5, 0, 5],
                ["closePath"],
            ],
            { fillStyle: "#00ffff" }
        );
    }
}
new Sprite_DrawShapes();
