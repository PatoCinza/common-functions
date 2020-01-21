## Functions

<dl>
<dt><a href="#compose">compose(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Compose functions as any functional stuff f: x -&gt; y</p>
</dd>
<dt><a href="#formatMoney">formatMoney(amount, fillDecimal, currencySymbol, thousandSeparator, decimalSeparator)</a> ⇒ <code>String</code></dt>
<dd><p>Given an amount of money as a <code>Number</code>, formats it and returns as a <code>String</code></p>
</dd>
<dt><a href="#getUniqueValues">getUniqueValues(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Given an array, remove all of it&#39;s duplicate values without changing the original</p>
</dd>
<dt><a href="#identity">identity(x)</a> ⇒ <code>*</code></dt>
<dd><p>Returns the passed param</p>
</dd>
<dt><a href="#reverseArray">reverseArray(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Given an array, return it inverted without changing it</p>
</dd>
<dt><a href="#validateCpf">validateCpf(cpf)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validates a cpf passed through here</p>
</dd>
</dl>

<a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Compose functions as any functional stuff f: x -> y

**Kind**: global function  
**Returns**: <code>function</code> - anything the function wants to receive and return  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | functions to compose |

<a name="formatMoney"></a>

## formatMoney(amount, fillDecimal, currencySymbol, thousandSeparator, decimalSeparator) ⇒ <code>String</code>
Given an amount of money as a `Number`, formats it and returns as a `String`

**Kind**: global function  
**Returns**: <code>String</code> - money formatted  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| amount | <code>Number</code> |  | money to format with no punctuation |
| fillDecimal | <code>Boolean</code> | <code>true</code> | If the function should fill the cents |
| currencySymbol | <code>String</code> | <code>R$</code> | currencySymbol |
| thousandSeparator | <code>String</code> | <code>.</code> | thousandSeparator |
| decimalSeparator | <code>String</code> | <code>,</code> | decimalSeparator |

<a name="getUniqueValues"></a>

## getUniqueValues(array) ⇒ <code>Array</code>
Given an array, remove all of it's duplicate values without changing the original

**Kind**: global function  
**Returns**: <code>Array</code> - array without duplicate values  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Original array |

<a name="identity"></a>

## identity(x) ⇒ <code>\*</code>
Returns the passed param

**Kind**: global function  
**Returns**: <code>\*</code> - x  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | param |

<a name="reverseArray"></a>

## reverseArray(array) ⇒ <code>Array</code>
Given an array, return it inverted without changing it

**Kind**: global function  
**Returns**: <code>Array</code> - yarra  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array to be reversed |

<a name="validateCpf"></a>

## validateCpf(cpf) ⇒ <code>Boolean</code>
Validates a cpf passed through here

**Kind**: global function  
**Returns**: <code>Boolean</code> - wheter it's valid or not  

| Param | Type | Description |
| --- | --- | --- |
| cpf | <code>String</code> | CPF string |

