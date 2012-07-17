/* ===========================================================
 * bootstrap-sorter.js v1.0
 * Copyright 2012 Sandeep Vemula aka bittu
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {
	
	"use strict"; // jshint ;_;

	/* SORTER CLASS DEFINITION
	 * ====================== */
  
	var ASC = "asc"
	,	DESC = "desc"
	,	Sorter = function (el, options) {
		this.table = el
		this.options = options
		this.init()
		$(el).on('click', 'th', $.proxy(this.clickSort, this))
	}
	
	Sorter.prototype = {
	
		constructor : Sorter
		
	,	sort : function (col, order) {
			
			var rows = $(this.table).find('tbody > tr').get()
			,	$table = $(this.table)
			,	$th = $table.find('th').eq(col)
			
			$.each(rows, function(index, row) {
				row.sortText = $(row).children('td').eq(col).text()
			})
			
			rows.sort(function(a, b) {
				return a.sortText > b.sortText
			})
			
			if(order === DESC)
				rows.reverse()

			$.each(rows, function(index, row) {
				console.log($table.one($.support.transition.end, $table.children('tbody').append(row)))
				row.sortText = null
			})
			
			$table.find('th').filter(function(){return $(this).data('ord')}).removeData('ord').find('i').remove()
			$th.data({'ord' : order === ASC ? DESC : ASC})
			$th.append('<i class="pull-right ' + ($th.data('ord') === ASC ? 'icon-chevron-up' : 'icon-chevron-down') + '"></i>')
		}
		
	,	init : function () {	
			var $this = this
			
			$(this.table).find('th').each(function(column){
				var $th = $(this)
				$th.data({'col': column})
				if($this.options.sortAll || $th.data('sort')) $th.css({'cursor' : 'pointer'})
			})

		}
	,	clickSort : function (e) {
			if (this.options.sortAll || $(e.target).data('sort'))
				this.sort($(e.target).data('col'), $(e.target).data('ord') === undefined ? ASC : $(e.target).data('ord'))
		}
	}
	
	
	/* SORTER PLUGIN DEFINITION
	 * ===================== */
	
	$.fn.sorter = function (option) {
		return this.each(function () {
			var $this = $(this)
			, 	data = $this.data('sort')
			, 	options = $.extend({}, $.fn.sorter.defaults, $this.data(), typeof option == 'object' && option)
			if (!data) $this.data('sort', (data = new Sorter(this, options)))
			if(options.sortAll || $this.find('th').eq(options.sortCol).data('sort')) data['sort'](options.sortCol, options.sortOrder)			
		})
	}
	
	$.fn.sorter.defaults = {
		sortOrder: ASC
	, 	sortCol: 0
	,	sortAll: true
	}
	
	$.fn.sorter.Constructor = Sorter
	
	/* SORTER DATA-API
	 * ============ */

	$(function () {
		$('table[data-toggle="sort"]').each(function (e) {
			$(this).sorter()
		})
	})
	
}(window.jQuery);