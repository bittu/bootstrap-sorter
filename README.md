# SORTER &nbsp;&nbsp;&nbsp; `twbootstrap table sorter plugin`

SORTER plugin is a twbootstrap flavoured light-weight plugin which applies sorting on a table

### Usage :

1. Create a table with data attribute `toggle` equalto `sort`

eg:

	<table data-toggle="sort">
	...
	</table>

2. Fire `sorter` on the table to create sorting functionality dynamically

eg:
	
	<table id="table1">
	...
	</table>
	$("#table1").sorter({});

### Config Options :

	sortOrder: 'default order for default column'	(default: ASC)
	
	sortCol: 'default column to sort (0 indexed columns)'	(default: 0)
	
	sortAll: 'whether to sort all columns'	(default: true)
	
###### if sortAll is false then each `<th>` should be given a data attrbute `ord` as `(true/false)`
`click on row header to sort on particular column`

### Example :

###### Basic Default Example

	<table class="table table-bordered table-striped table-condensed" data-toggle="sort">
		<caption>Table Caption</caption>
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
	</table>

###### Example 2	`with default sort column to 1 and default sort order to DESC`

	<table class="table table-bordered table-striped table-condensed" data-toggle="sort" data-sort-order="DESC" data-sort-col="1">
		<caption>Table Caption</caption>
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
	</table>

###### Example 3	`with default sort All columns to false and settiing only one column to sort`

	<table class="table table-bordered table-striped table-condensed" data-toggle="sort" data-sort-all="false">
		<caption>Table Caption</caption>
		<thead>
			<tr>
				<th>#</th>
				<th data-ord="true">First Name</th>
				<th data-ord="true">Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
	</table>

# Copyright and license

Copyright 2012, Sandeep Vemula _aka_ bittu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
