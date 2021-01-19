"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.es = void 0;
exports.es = {
    operator_info_description_array_count: 'Cuenta el número de elementos en el Array de entrada',
    operator_info_description_array_filter: "Discard the items in the input array that doesn't match the {{filter}} function",
    operator_info_description_array_flatten: 'Remove {{depth}} level of nesting of the input Array',
    operator_info_description_getkey: 'Access to the "{{key}}" key of the input {{inputType}}, and manage the value as {{outputType}}',
    operator_info_description_mapvalues: 'Obtain a list with the values of the input Map, and manage the value as an Array of {{type}}',
    operator_info_description_cast: 'Cast the {{inputType}} input into {{outputType}}',
    operator_info_description_array_map: 'Apply the {{subscript}} script on all the elements of the input Array',
    operator_info_description_array_reduce: 'Reduce all the items in the input Array into a single item of type {{outputType}} by applying the {{reducer}} reducer function',
    operator_info_description_array_some: 'Tell whether at least one of the items in the input Array passes the condition defined by the {{filter}} filter function',
    operator_info_description_array_sort: 'Sort the input Array in {{order}} order',
    operator_info_description_array_take: 'Take the elements from the input Array between positions {{min}} and {{max}}, and discard all the rest',
    operator_info_description_boolean_match: 'Match the Boolean input with "{{subscript}}" and return the value associated with it. Similar than a switch statement',
    operator_info_description_boolean_negate: 'Negate the input Boolean (make it True if it was False, or make it False if it was True)',
    operator_info_description_bytes_hash: 'Compute the hash of the input Bytes',
    operator_info_description_integer_absolute: 'Calculate the absolute value of the input Integer',
    operator_info_description_integer_greaterthan: 'Check if the input Integer is greater than {{argument}} (output will be Boolean)',
    operator_info_description_integer_lessthan: 'Check if the input Integer is greater than {{argument}} (output will be Boolean)',
    operator_info_description_integer_match: 'Match the Integer input with {{subscript}} and return the value associated with it. Similar than a switch statement',
    operator_info_description_integer_modulo: 'Calculate the integer division of the input integer by {{argument}}',
    operator_info_description_integer_multiply: 'Multiply the input Integer by {{factor}}',
    operator_info_description_integer_negate: 'Calculate the negative of the input Integer',
    operator_info_description_integer_power: 'Calculate the input Integer raised to the power of {{exponent}}',
    operator_info_description_integer_reciprocal: 'Calculate the multiplicative inverse (1/x) of the input Integer, and manage the result as Float.',
    operator_info_description_integer_sum: 'Sum {{addend}} to the input Integer',
    operator_info_description_float_absolute: 'Compute the absolute value of the input Float, and manage the result as Float',
    operator_info_description_float_celling: 'Compute the the least Integer greater than or equal the input Float',
    operator_info_description_float_greaterthan: 'Compare if the input Float is greater than {{value}}, and manage the value as Boolean',
    operator_info_description_float_floor: 'Compute the greatest integer less or equal the input Float, and manage the result as Integer',
    operator_info_description_float_lessthan: 'Compare if the input Float is less than {{argument}}, and manage the value as Boolean',
    operator_info_description_float_modulo: 'Compute the division by the input Float and {{argument}} Then manage the result as Float',
    operator_info_description_float_multiply: 'Compute the product by the input Float and {{argument}}. Then manage the result as Integer',
    operator_info_description_float_negate: 'Compute the negative of the input Integer, and manage the result as Float',
    operator_info_description_float_power: 'Compute the input Float raised to the power of {{exponent}}. Then, handle the result as Float',
    operator_info_description_float_reciprocal: 'Compute the multiplicative inverse of the input Float and manage the result as Float',
    operator_info_description_float_round: 'Round integer part from the Float input, and manage the result as Integer',
    operator_info_description_float_sum: 'Compute the addition between the input Float and {{addend}}. Then handle the result as Float',
    operator_info_description_float_truncate: 'Take integer part from the Float input, and manage the result as Integer',
    operator_info_description_map_entries: 'Obtain a list of key-value tuples from the input Map, and manage the value as Array',
    operator_info_description_map_keys: 'Obtain a list with the keys names of the input Map, and manage the value as Array of String.',
    operator_info_description_string_length: 'Count the number of elements of the input String, and mannage the values as Integer.',
    operator_info_description_string_match: 'Match the String input with {{subscript}} and return the value associated with it. Similar than a switch statement',
    operator_info_description_string_parsejsonarray: 'Interpretate the input String as a JSON-encoded Array structure.',
    operator_info_description_string_parsejsonmap: 'Interpretate the input String as a JSON-encoded Map structure.',
    operator_info_description_string_parsexml: 'Interpretate the input String as a XML-encoded Map structure.',
    operator_info_description_string_tolowercase: 'Convert to lowercase the input String, and manage the value as String',
    operator_info_description_string_touppercase: 'Convert to uppercase the input String, and manage the value as String',
    aggregation_tally_filter_description_deviation_standard: 'Discard any result that is more than "{{number}}" times the standard deviation times away from the average. Long story short: remove outliers',
    aggregation_tally_filter_description_mode: 'Discard any result that is different from the mode. Long story short: remove outliers',
    aggregation_tally_reducer_description_mode: 'Calcula la moda de los valores',
    aggregation_tally_reducer_description_averagemean: 'Calcula la media de los valores',
    aggregation_tally_reducer_description_deviationstandard: 'Calcula la desviación estandard de los valores',
};
exports.default = exports.es;
