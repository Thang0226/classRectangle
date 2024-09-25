class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  getPeri() {
    return 2 * (this.height + this.width);
  }

  getArea() {
    return this.height * this.width;
  }

  draw(posX, posY) {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(posX, posY, this.width, this.height);
  }
}

let rect = new Rectangle(200, 100);
rect.draw(50, 50);

rect.height = 50;
rect.width = 400;
rect.draw(300, 200);

document.getElementById(
  "results"
).innerHTML = `Hinh chu nhat moi co chu vi bang ${rect.getPeri()} va dien tich bang ${rect.getArea()}`;
