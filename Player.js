class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 30,30);
		this.spt.shapeColor="blue";

	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}
    moveLeft() {
		
			this.spt.x=this.spt.x-10
		}
    moveRight() {
		this.spt.x=this.spt.x+10
	}
	jump() {
		this.spt.velocityY = -10;
	}
	}
	

























