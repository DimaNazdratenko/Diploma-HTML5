function end() {
    gameOverScene.visible = true;

// Падение птиц и самолета при столкновении------------------------------------------------------------------------------
    if (detectCollision(plane, enemy)) {
        plane.rotation -= 0.03;
        plane.y += Position.STEP_Y;

        enemy[3].movieclip.rotation += 0.03;
        enemy[3].movieclip.y += Position.STEP_Y;

        enemy[2].movieclip.y += Position.STEP_Y / 2;
        enemy[1].movieclip.y += Position.STEP_Y / 2;
        enemy[0].movieclip.y += Position.STEP_Y / 2;
    } else if (detectCollision(plane, enemy)) {
        plane.rotation -= 0.03;
        plane.y += Position.STEP_Y;

        enemy[2].movieclip.rotation += 0.03;
        enemy[2].movieclip.y += Position.STEP_Y;

        enemy[3].movieclip.y += Position.STEP_Y / 2;
        enemy[1].movieclip.y += Position.STEP_Y / 2;
        enemy[0].movieclip.y += Position.STEP_Y / 2;
    } else if (detectCollision(plane, enemy)) {
        plane.rotation -= 0.03;
        plane.y += Position.STEP_Y;

        enemy[1].movieclip.rotation += 0.03;
        enemy[1].movieclip.y += Position.STEP_Y;

        enemy[3].movieclip.y += Position.STEP_Y / 2;
        enemy[2].movieclip.y += Position.STEP_Y / 2;
        enemy[0].movieclip.y += Position.STEP_Y / 2;
    } else if (detectCollision(plane, enemy)) {
        plane.rotation -= 0.03;
        plane.y += Position.STEP_Y;

        enemy[0].movieclip.rotation += 0.03;
        enemy[0].movieclip.y += Position.STEP_Y;

        enemy[3].movieclip.y += Position.STEP_Y / 2;
        enemy[2].movieclip.y += Position.STEP_Y / 2;
        enemy[1].movieclip.y += Position.STEP_Y / 2;
    }

// Изменения сцены для текста Score, что бы он был сверху над темным фоном
    gameOverScene.addChild(score);
    gameScene.removeChild(score);

// Движение текста Score в центр экрана и увеличение--------------------------------------------------------------------
    if (score.x <= renderer.width / 2 - score.width / 2 && score.y >= renderer.height / 3 - score.height / 2 - message.height) {
        score.x += 6;
        score.y -= 6;
    }

    if (score.scale.x <= 1.2 && score.scale.y <= 1.2) {
        score.scale.x += 0.002;
        score.scale.y += 0.002;
    }
}


