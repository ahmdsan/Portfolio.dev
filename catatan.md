<div class="media">
                <div class="card-media">
                    <a href="" target="_blank"><img src="./img/instagram-svgrepo-com.svg" alt=""></a>
                </div>
                <!-- Github -->
                <div class="card-media">
                    <a href="" target="_blank"><img src="./img/github-svgrepo-com (3).svg" alt=""></a>
                </div>
                <!-- Youtube -->
                <div class="card-media">
                    <a href="" target="_blank"><img src="./img/youtube-svgrepo-com.svg" alt=""></a>
                </div>
                <!-- WA -->
                <div class="card-media">
                    <a href="" target="_blank"><img src="./img/whats-app-svgrepo-com.svg" alt=""></a>
                </div>
            </div>
        </div>



<!-- css -->

.media {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 30px;
}

.media img {
    height: 30px;
    width: 30px;
    margin-top: 5px;
}

.card-media {
    background-color: #b9b9b9;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
}

.card-media:hover {
    background-color: gold;
}



<div class="skills-right">
    <div class="skill">
        <span>HTML</span>
        <div class="bar">
            <div class="fill" style="width: 90%;"></div>
        </div>
        <span class="percent">90%</span>
    </div>

    <div class="skill">
        <span>CSS</span>
        <div class="bar">
            <div class="fill" style="width: 70%;"></div>
        </div>
        <span class="percent">70%</span>
    </div>

    <div class="skill">
        <span>JavaScript</span>
        <div class="bar">
            <div class="fill" style="width: 40%;"></div>
        </div>
        <span class="percent">40%</span>
    </div>

    <div class="skill">
        <span>Figma</span>
        <div class="bar">
            <div class="fill" style="width: 80%;"></div>
        </div>
        <span class="percent">80%</span>
    </div>

    <div class="skill">
        <span>Canva</span>
        <div class="bar">
            <div class="fill" style="width: 90%;"></div>
        </div>
        <span class="percent">90%</span>
    </div>
</div>

.skills-right {
    width: 30%;
    margin-left: auto;
    margin-right: 20px;
}

.skill {
    display: flex;
    align-items: center;
    margin: 15px 0;
    gap: 10px;
}

.skill span {
    width: 100px;
}

.bar {
    flex-grow: 1;
    height: 5px;
    background: #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.fill {
    height: 100%;
    background: #B87C4C;
    border-radius: 5px;
}

.percent {
    width: 50px;
    text-align: right;
}

<!--  -->

