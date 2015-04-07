![CSS Switch](https://raw.githubusercontent.com/maruthip25/css-switch/master/head.png)

CSS Switch is a CSS rendered switch to switch between two CSS files :stuck_out_tongue_winking_eye:

##Usage

1. Include `css-switch.js` or `css-switch.min.js` in your HTML.

        <script src="css-switch.js" type="text/javascript"></script>
2. Define an element in your HTML that will be dedicate to the switch. For Example:

        <div id="any-id-here"></div>
*Note: Please leave this element empty as its contents will be replaced by the switch*
3. Call the initSwitch() function with the following syntax.

        initSwitch('one_css_file', 'another_css_file', 'id/class_of_the_element');
So, assuming we want to switch between style1.css and style2.css and want the following element to be converted into a switch

        <div id="css-switch"></div>
Then, add the following code to your HTML (after including `css-switch.js` or `css-switch.min.js`)

        <script type="text/javascript">
          initSwitch("style1.css","style2.css","#css-switch");
        </script>
You can also use classes instead of id's

        <div class="css-switch"></div>
        ...
        <script src="css-switch.js" type="text/javascript"></script>
        <script type="text/javascript">
          initSwitch("style1.css","style2.css",".css-switch");
        </script>


        <script src="css-switch.js" type="text/javascript"></script>


        <script type="text/javascript">
         initSwitch("style1.css","style2.css",".css-switch");
        </script>


    *Please note that in this case, only the first element with the class "css-switch" will be converted into a switch.*

** Note: Do not include either of the two css files using `<link>` tag. CSS Switch will automatically append the "offCSS" file to your head tag.**

Thats pretty much it.
