import { _decorator, Component, Node , CCInteger, input, Input, EventKeyboard, KeyCode, director} from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird';
import { PipePool } from './PipePool';

@ccclass('GameCtrl')
export class GameCtrl extends Component {

    @property({
        type: Ground,
        tooltip: 'this is ground'
    })
    public ground: Ground

    @property({
        type: Results,
        tooltip:'results here'
    })
    public result: Results

    @property({
        type: Bird,
        tooltip:'bird here'
    })
    public bird: Bird

    @property({
        type: PipePool
    })
    public pipeQueue: PipePool;

    @property({
        type: CCInteger
    })
    public speed: number = 300;

    @property({
        type: CCInteger
    })
    public pipeSpeed: number = 200;

    

    onLoad(){
        this.initListener();

        this.result.resetScore();

        director.pause();
    }

    initListener(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)

        this.node.on(Node.EventType.TOUCH_START,() => {
            this.bird.fly();
        });
    }

    onKeyDown(event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.KEY_A:
                this.gameOver();
                break;

            case KeyCode.KEY_P:
                this.result.addScore();
                break;

            case KeyCode.KEY_Q:
                this.resetGame();
                this.bird.resetBird();
                break;
            
        }
    }

    startGame(){
        this.result.hideResults();
        director.resume();
    }
    
    gameOver(){
        this.result.showResults();
        director.pause();
    }

    resetGame(){
        this.result.resetScore();
        this.pipeQueue.reset();
        this.startGame();
    }

    passPipe(){
        this.result.addScore();
    }

    createPipe(){
        this.pipeQueue.addPool();
    }
}


