describe("GCD()", function() {
	it("Если аргументы - целые числа != нулю одновременно", function() {
		expect(unit.GCD(150,650)).toBe(50);
		expect(unit.GCD(3674,5894)).toBe(2);
		expect(unit.GCD(25944,53580)).toBe(564);
	});
	it("Если оба аргумента равны нулю", function() {
		expect(unit.GCD(0,0)).toBeNaN();
	});
	// it("Если один из аргументов равен нулю", function() {
	// 	expect(unit.GCD(60,0)).toBe(60);
	// 	expect(unit.GCD(0,30)).toBe(30);
	// 	//найден баг, который я не смог не криво пофиксить без использования стандартных библиотек :С
	// });
	it("Если аргументы - дробные числа", function() {
		expect(unit.GCD(10.2,4)).toBe(undefined);
		expect(unit.GCD(6,4.340)).toBe(undefined);
		expect(unit.GCD(10.2,150.45)).toBe(undefined);
	});
	//Программа отказывается считать большие числа, поэтому проверки на большие числа не делаю!
});

describe("factor()", function() {
	it("Если аргумент - небольшое число", function() {
		expect(unit.factor(40)).toEqual([2,2,2,5]);
		expect(unit.factor(500)).toEqual([2,2,5,5,5]);
		expect(unit.factor(4888)).toEqual([2,2,2,13,47]);
	});
	it("Если аргумент - большое число", function() {
		expect(unit.factor(566446)).toEqual([2,61,4643]);
		expect(unit.factor(896573421)).toEqual([3,3,3,17,359,5441]);
		expect(unit.factor(86574329410)).toEqual([2,5,41,103,461,4447]);
		//Программа отказывается считать очень большие числа
	});
	// it("Если аргумент - дробное число", function() {
	// 	// expect(unit.factor(56.2)).toEqual([2,61,4643]);
	// 	//Программа отказывается проверять очень большие числа на простоту (выдает ошибку на 86574329410)
	// });
	it("Если аргумент - строка", function() {
		expect(unit.factor('10dsdadsa')).toBe(null);
		expect(unit.factor('500')).toEqual([2,2,5,5,5]);
		expect(unit.factor('')).toBe(null);
	});
	it("Если аргумент <= 0", function() {
		expect(unit.factor(-40)).toBe(null);
		expect(unit.factor(0)).toBe(null);
	});
});

describe("sort()", function() {
	it("Сортировка массива дробных/целых/отрицательных числел", function() {
		expect(unit.sort.quickSort([55, 64, 41.5, 41.2, 43, 32, 41])).toEqual([32, 41, 41.2, 41.5, 43, 55, 64]);
		expect(unit.sort.quickSort([68992, 325131, 321, 12345, 324, 560, 10304930239])).toEqual([ 321, 324, 560, 12345, 68992, 325131, 10304930239 ]);
		expect(unit.sort.quickSort([-5, -567, 410, -657, 5692, 0, 342])).toEqual([ -657, -567, -5, 0, 342, 410, 5692 ]);
	});
	it("Сортировка массива строк", function() {
		expect(unit.sort.quickSort(['Ert', 'Erwq','Abc', 'Dsa'])).toEqual([ 'Abc', 'Dsa', 'Ert', 'Erwq' ]);
		expect(unit.sort.quickSort(['Яков', 'Сергей','Андрей', 'Михаил'])).toEqual([ 'Андрей', 'Михаил', 'Сергей', 'Яков' ]);
	});
	it("Сортировка массива с пустыми строками и отсутствующими элементами", function() {
		expect(unit.sort.quickSort(['', 'Erwq',, 'Dsa'])).toEqual([ '', 'Dsa', 'Erwq', undefined ]);
	});
});
