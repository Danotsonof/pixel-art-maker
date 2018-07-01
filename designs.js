$(function() {
    var color, colorCurrent;

    // Selects grid size
    var height = $("#inputHeight");
    var width = $("#inputWidth");

    // Creates grid
    $("#submit").click(function() {
        // Checks input for zero '0'
        if (height.val() === "0" || width.val() === "0") {
            $("#pixelCanvas").empty();
        }
        // Clears the canvas
        $("#pixelCanvas").empty();
        // Creates canvas
        var row = 1;
        while (row <= height.val()) {
            $("#pixelCanvas").prepend("<tr></tr>");
            $("#pixelCanvas tr:first-child").prepend(makeGrid(width.val()));
            row++;
        }
        return false;
    });

    // function makeGrid(), creates rows
    function makeGrid(width) {
        var columns = "";
        for (var i = 1; i <= width; i++) {
            columns += "<td></td>";
        }
        return columns;
    }

    // Clears the canvas
    $("#clear").click(function() {
        $("#pixelCanvas").empty();
    });

    // Sets color of each pixel
    $("#pixelCanvas").click(function(e) {
        // Selects input color and convert to rgb color
        color = hexToRgb($("#colorPicker").val());

        // checks current color of selected pixel
        colorCurrent = $(e.target).css("background-color");

        //compares the selected input color with present color of pixel
        if (colorCurrent == color) {
            $(e.target).css("background-color", "#ffffff");
        } else {
            $(e.target).css("background-color", color);
        }
    });

    // Convert Hex color value to rgb color values
    function hexToRgb(color) {
        color.split("");
        color =
            "rgb(" +
            parseInt(color[1] + color[2], 16) +
            ", " +
            parseInt(color[3] + color[4], 16) +
            ", " +
            parseInt(color[5] + color[6], 16) +
            ")";
        return color;
    }
});
