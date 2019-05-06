// question 1

function foo()
{
    function bar()
    {
        return 3;
    }
    return bar();
    function bar()
    {
        return 8;
    }
}
alert(foo());

// question 2

// function foo()
// {
//     var bar = function ()
//     {
//         return 3;
//     };
//     return bar();
//     var bar = function ()
//     {
//         return 8;
//     };
// }
// alert(foo());

// question 3

// alert(foo());
// function foo()
// {
//     var bar = function ()
//     {
//         return 3;
//     };
//     return bar();
//     var bar = function ()
//     {
//         return 8;
//     };
// }

// question 4

// function foo()
// {
//     return bar();
//     var bar = function ()
//     {
//         return 3;
//     };
//     var bar = function ()
//     {
//         return 8;
//     };
// }
// alert(foo());