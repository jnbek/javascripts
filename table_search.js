/*
* Poor man's Javascript search
* Tested against tables and ul/ol maybe work for other element blocks too?
* Searchable elements should have an id, an element that has an id, like a table
* header, you do not want to be searched can be provided, otherwise, omit an id
* for elements that you do not want searched.
* Requires a form input with an id and an onKeyUp event:
* <input type="text" id="id_of_search_input" onKeyUp="do_filter_notes();" />
* A button to clear the form will reset the element block to normal:
* <button type="button" onClick="document.getElementById('id_of_search_input').value = '';do_filter_notes();">Clear</button>
*/
var do_filter_notes = function() {
    var form_input = 'id_of_search_input';
    var search_target = 'id_of_parent_element_to_search';
    var ignored_id   = 'id_of_elements_to_not_apply_search_to';
    var child_elem = "tr"; // ChildElement to perform search on.
    /*
    * Object definition:
    * elem : css-display-type
    */ 
    var child_elem_display = {
        "tr" : "table-row",
        "li" : "block"
    };
    var filter_notes = document.getElementById(form_input).value;
    var filter_table = document.getElementById(search_target);
    var filter_rows = filter_table.getElementsByTagName(child_elem);
    for (var i = 0; i < filter_rows.length; i++) {
        var id = filter_rows[i].getAttribute("id");
        if(!id) {
            continue;
        }
        var filter_note_row = document.getElementById(id);
        var filter_regexp = new RegExp(filter_notes, 'i');
        if (filter_notes && filter_note_row.getAttribute('id') != ignored_id) {
            filter_note_row.innerHTML.match(filter_regexp) ? filter_note_row.style.display = child_elem_display[child_elem] : filter_note_row.style.display = "none";
            continue;
        }
        else {
           filter_note_row.style.display = child_elem_display[child_elem];
            continue;
        }
    }
    return false;
}
