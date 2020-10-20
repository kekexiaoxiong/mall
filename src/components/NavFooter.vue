<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>测试商场</p>
        </div>
        <div class="footer-link">
            <a href="">主页1</a>
            <a href="">主页2</a>
            <a href="">主页3</a>
            <a href="">主页4</a>           
        </div>
        <div class="copyright">this is a <span class="domain">感觉还可以</span>  shangcheng</div>


    </div>
</template>

<script>
export default {
    name:'nav-footer'
}
</script>

<style lang="scss">
    .footer{
        height: 233px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin:0 10px ;
            }
            margin-bottom: 13px;
        }
        .domain{
            color: #ff6600;
        }
    }

</style>