<template>
    <main class="page">
    <section class="con">
        <!-- 为什么要用 -->
        <span class="title">为什么使用 Web 动画</span>
        <span class="text">
            Web
            动画能够比静态页面更好地吸引和保持人们的注意力，以更清晰和有效地传达一个想法或概念。
            <br />
            出色的 Web 动画能够在每一次移动中传达一个故事。它也将给 Web
            应用程序或网站注入“生命”和“灵魂”。
            <br />
            以下从多个不同的角度来阐述 Web 动画对 Web 应用程序或网站的重要性。
        </span>

                
        <!-- 减少认知负担 -->
        <span class="itemTitle">减少认知负担</span>
        <span class="text">
            动画有助于减少认知负担，这是因为它们使状态变化更加自然和渐近，从而降低了用户的认知负担。以下如何减少认知负担的重要原因：
        </span>
        <br />
        <span class="text">
            <li>
                <b>自然的状态变化：</b> 在现实世界中，几乎没有什么状态变化是瞬间发生的。例如，当太阳落山时，过程是逐渐的，而不是突然间发生的。动画模仿了这种自然的状态变化，使之更容易为用户接受。没有动画的状态变化通常被认为是突兀的，用户难以理解。
            </li>
            <li>
                <b>减少认知努力：</b> 当没有动画时，用户的大脑需要付出更多的认知努力来理解状态之间的突然变化。这包括插值过程，即用户需要尝试填补状态之间的信息空白，这会消耗大脑的资源。动画通过明确展示状态之间的过渡，降低了这种认知努力。
            </li>
            <li>
                <b>提供中间过程：</b>动画明确展示了状态之间的中间步骤，使用户能够逐渐了解状态的变化过程。这有助于用户更容易地跟踪和理解变化。
            </li>
        </span>
        <br>
        <span class="text">动画有助于使界面更加符合人类大脑的工作方式，减轻了用户的认知负担，使其更容易理解和与界面互动。这有助于提高用户体验和降低用户的学习曲线。在下面这个示例中，动画显示了菜单如何打开以及元素如何出现。用户可以集中精力完成任务（查找元素）。</span>
        
        
        <!--  -->
        <span class="itemTitle">动画提供反馈</span>
        <span class="text">
            当你向某人提出一个问题，而他不回应时，静默片刻，你可能会开始怀疑是否发生了什么事情。如果他们听到了问题并理解了它，或者他们皱起眉头，那你就知道他们已经听到了，并在考虑如何回答。对界面也是如此。你可以利用动画和过渡来创建微小的交互反馈。这些反馈告诉用户：“你的操作有效，可以期待很快会有响应”。这使用户体验更加流畅，产生了连贯性的错觉。它们为界面带来一定程度的“响应性”，这里的“响应性”指的是“界面对用户输入作出响应”，而不是响应式 Web 设计。
            以下是动画提供交互反馈的一些关键特点：
        </span>
        <br>
        <span class="text">
            <li><b>操作成功的指示：</b>当用户执行了某项操作，例如点击按钮或提交表单时，动画可以用来传达操作成功的信息。这可以包括按钮被按下的反馈、表单已被提交的动画或其他指示用户操作已被接收的效果。</li>
            <li><b>过渡效果：</b>过渡动画可以用来平滑地改变界面元素的状态。例如，当用户将鼠标悬浮在链接上时，链接文字可以逐渐改变颜色，而不是突然改变。这种平滑的过渡效果有助于用户理解状态变化。</li>
            <li><b>反馈的时机：</b>动画应该在用户操作之后迅速出现，以避免用户感到困惑。它们应该是即时的，从而告诉用户他们的操作已被成功接收。</li>
            <li><b>动画类型：</b>反馈动画可以采用各种形式，包括淡入淡出、颜色变化、旋转或平移。选择适当的动画类型取决于你要传达的信息和用户体验的设计。</li>
            <li><b>持续性：</b>在某些情况下，反馈动画可能需要持续一段时间，以指示操作正在进行中。例如，当用户上传文件时，可以显示一个旋转的加载动画，直到操作完成。</li>
        </span>
        <br>
        <span class="text">
            示例，当用户点击按钮时，按钮的外观会及时作出响应（按钮有一个压平的效果），这能快速地给用户提供反馈：
        </span>
        <TestButton/>
        <span class="text">
            总之，动画提供交互反馈是改善用户体验的关键元素，它们有助于用户理解他们的操作状态，使界面更加友好和易于使用。通过使用适当的动画，用户可以更轻松地与应用程序或网站进行互动，并感到更有信心。
        </span>



        <!-- 缺点 -->
        </section>
    </main>
</template>


<script>
import TestButton from '../Button/components/SvgButton.vue';

export default {
    name: "IllustaratePage",
    components:{TestButton}
};
</script>

<style lang="less" scoped>
.page{
    width: 100%;
    height: 100%;
    background-color: aliceblue;
}
.con {
    padding: 20px 0;
    width: 80vw;
    display: flex;
    flex-direction: column;

}
.title {
    margin: 24px 0 32px;
    font-size: 36px;
    line-height: 1.389;
    font-weight: 700;
    max-width: 850px;
    padding: 0 50px;
}
.itemTitle {
    font-size: 26px;
    line-height: 38px;
    margin: 16px 0 22px;
    font-weight: 700;
    padding: 0 50px;
}
.text {
    line-height: 1.74;
    letter-spacing: 0.008em;
    padding: 0 50px;
    margin-bottom: 3.915px;
    font-size: 16px;
}
</style>