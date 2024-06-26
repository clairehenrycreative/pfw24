import { Wave } from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 5;

        this.color = ['rgba(138,109,217)', 'rgba(95,189,196)', 'rgba(210,156,229)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
         }
    }

        resize(stageWidth, stageHeight) {
            for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
              }
         }
}
