# jQuery Swap Plugin
*jQuery plug-in used to swap the position or zIndex property of two or more elements inside your DOM.*

Example of use:
---------------

1. Swap the selected element with the target element

        $("#myDiv").swapWith("#myTargetDiv");

2. Revert the order of the selected element's children 

        $("#myDivWithChildren").swapGroup();

3. Swap the zIndex property of two elements

        $("#myDiv").swapZIndex("#myTargetDiv");
