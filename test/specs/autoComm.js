const assert = require('assert');

describe('Verify that the results match the search criteria', () => {

    it('Open www.airbnb.com', () => {

        return browser.url('https://www.airbnb.com/')

    })

    it('Select Rome, Italy', () => {

        //browser.pause(10000);

        const sLocationClick = $('._gor68n');
        sLocationClick.click();

        const locationName = $('[name="query"]');
        locationName.setValue("Rome, Italy");

    })

    it('Pick a Check-In date', () => {

        // let CheckIn = $('._wtz1co');  
        let CheckIn = $('[data-testid="structured-search-input-field-split-dates-0"]');

        // if (CheckIn.getText() == "Check in") {
        CheckIn.click();

        var datetime = new Date(Date.now() + 604800000); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const DateP = $('[data-testid="datepicker-day-' + testid +
            '"]');
        DateP.click();



        //  }

    })

    it('Pick a Check-Out date', () => {


        var datetime = new Date(Date.now() + 12096e5); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const currDate = $('[data-testid="datepicker-day-' + testid +
            '"]');
        currDate.click();

    })

    it('Select the number of guests', () => {

        let Guests = $('[data-testid="structured-search-input-field-guests-button"]');

        Guests.click();

        let increaseBtnAdults = $('[data-testid="stepper-adults-increase-button"]');

        increaseBtnAdults.doubleClick();

        let increaseBtnChildren = $('[data-testid="stepper-children-increase-button"]');

        increaseBtnChildren.click();


        //  browser.pause(5000);

    })


    it('Search for properties', () => {

        let searchBtn = $('[data-testid="structured-search-input-search-button"]');

        searchBtn.click();


        //  browser.pause(5000);

    })

    it('Verify properties', () => {


        browser.pause(30000);

        var countTrue = 0
        var countFalse = 0

        const elem = $$('._kqh46o');
        for (var i = 0; i < 40; i++) {
            console.log("elem : ", elem[i].getText());
            var test = '' + elem[i].getText()
            if (test.includes('3 guests')) {
                countTrue = countTrue + 1;
            } else {
                countFalse = countFalse + 1;
            }
        }
        console.log("countTrue", countTrue);
        console.log("countFalse", countFalse - 20);

    })
})

describe(': Verify that the results and details page match the extra filters', () => {

    it('Open www.airbnb.com', () => {

        return browser.url('https://www.airbnb.com/')

    })

    it('Select Rome, Italy', () => {

        browser.pause(5000);

        const sLocationClick = $('._gor68n');
        sLocationClick.click();

        const locationName = $('[name="query"]');
        locationName.setValue("Rome, Italy");

    })

    it('Pick a Check-In date', () => {

        // let CheckIn = $('._wtz1co');  
        let CheckIn = $('[data-testid="structured-search-input-field-split-dates-0"]');

        // if (CheckIn.getText() == "Check in") {
        CheckIn.click();

        var datetime = new Date(Date.now() + 604800000); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const DateP = $('[data-testid="datepicker-day-' + testid +
            '"]');
        DateP.click();



        //  }

    })

    it('Pick a Check-Out date', () => {


        var datetime = new Date(Date.now() + 12096e5); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const currDate = $('[data-testid="datepicker-day-' + testid +
            '"]');
        currDate.click();

    })

    it('Select the number of guests', () => {

        let Guests = $('[data-testid="structured-search-input-field-guests-button"]');

        Guests.click();

        let increaseBtnAdults = $('[data-testid="stepper-adults-increase-button"]');

        increaseBtnAdults.doubleClick();

        let increaseBtnChildren = $('[data-testid="stepper-children-increase-button"]');

        increaseBtnChildren.click();


        //  browser.pause(5000);

    })


    it('Search for properties', () => {

        let searchBtn = $('[data-testid="structured-search-input-search-button"]');

        searchBtn.click();


        //  browser.pause(5000);

    })

    //Test 2

    it('Click More filters', () => {

        let moreFilterBtn = $('[data-testid="menuItemButton-dynamicMoreFilters"]');

        moreFilterBtn.click();


        // browser.pause(10000);

    })

    it('Select the number of bedrooms as 5', () => {

        browser.pause(3000);

        let btnIncreaseBedrooms = $('[data-testid="filterItem-rooms_and_beds-stepper-min_bedrooms-0-increase-button"]');
        btnIncreaseBedrooms.doubleClick();
        btnIncreaseBedrooms.doubleClick();
        btnIncreaseBedrooms.click();


        //browser.pause(10000);

    })

    it('Click Show Stays', () => {

        let btnSumitFilter = $('[data-testid="more-filters-modal-submit-button"]');

        btnSumitFilter.click();


        //  browser.pause(10000);

    })

    it('Verify that the properties displayed on the first page have at least the number of selected bedroom', () => {

        browser.pause(30000);

        var countTrue = 0
        var countFalse = 0

        const elem = $$('._kqh46o');
        for (var i = 0; i < 40; i++) {
            console.log("elem : ", elem[i].getText());
            var test = '' + elem[i].getText()
            if (test.includes('3 guests')) {
                countTrue = countTrue + 1;
            } else {
                countFalse = countFalse + 1;
            }
        }
        console.log("countTrue Test 2", countTrue);
        console.log("countFalse Test 2", countFalse - 20);

    })

    it('Open the details of the first property', () => {

        let detailsFirstProperty = $('._8s3ctt');

        detailsFirstProperty.click();

        browser.pause(5000);

        const handles = browser.getWindowHandles();
        if (handles.length > 1) {
            browser.switchToWindow(handles[1]);
            browser.closeWindow();
            browser.switchToWindow(handles[0]);
        }

    })

    // it('Check that in the Amenities popup Pool is displayed under Facilities category', () => {


    //     browser.pause(30000);

    //     // let test = $('._1byskwn');
    //     // console.log("test", test.getText());
    //     let test1 = $('._14i3z6h');
    //     console.log("test", test1.getText());

    //     // let showAmenities = $('#FMP-target');
    //     //showAmenities.click();

    //     $('._1tv4hg3').moveTo({
    //         xOffset: 0,
    //         yOffset: 0
    //     })

    //     let test = $('._1tv4hg3');
    //     test.click();

    //     browser.pause(10000);

    // let test1 = $('#FMP-target');
    // test1.click();

    // browser.waitUntil(function () {
    //     const state = browser.execute(function () {
    //         return document.readyState;
    //     });

    //     if (state === 'complete') {
    //         console.log("state:" + state);
    //         return state;
    //     }
    // }, {
    //     timeout: 60000, //60secs
    //     timeoutMsg: 'Oops! Check your internet connection'
    // });


    // let test = $('[data-plugin-in-point-id="AMENITIES_DEFAULT"]');
    // console.log(test.getText());

    // const elem = $('._13e0raay');
    // // scroll to specific element
    // elem.scrollIntoView();



    // let showAmenities = $('._13e0raay');
    // showAmenities.click();

    //  browser.init().timeouts('pageLoad', 100000);

    //   browser.pause(50000);

    // browser.waitUntil(function () {
    //     const state = browser.execute(function () {
    //         return document.readyState;
    //     });

    //     if (state === 'complete') {
    //         console.log("state:" + state);
    //         return state;
    //     }
    // }, {
    //     timeout: 60000, //60secs
    //     timeoutMsg: 'Oops! Check your internet connection'
    // });

    // })

})

describe('Verify that a property is displayed on the map correctly', () => {

    it('Open www.airbnb.com', () => {

        return browser.url('https://www.airbnb.com/')

    })

    it('Select Rome, Italy', () => {

        browser.pause(5000);

        const sLocationClick = $('._gor68n');
        sLocationClick.click();

        const locationName = $('[name="query"]');
        locationName.setValue("Rome, Italy");

    })

    it('Pick a Check-In date', () => {

        // let CheckIn = $('._wtz1co');  
        let CheckIn = $('[data-testid="structured-search-input-field-split-dates-0"]');

        // if (CheckIn.getText() == "Check in") {
        CheckIn.click();

        var datetime = new Date(Date.now() + 604800000); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const DateP = $('[data-testid="datepicker-day-' + testid +
            '"]');
        DateP.click();



        //  }

    })

    it('Pick a Check-Out date', () => {


        var datetime = new Date(Date.now() + 12096e5); //A very simple (but ugly) way to do it.

        let testid = datetime.toISOString().slice(0, 10).toString();

        const currDate = $('[data-testid="datepicker-day-' + testid +
            '"]');
        currDate.click();

    })

    it('Select the number of guests', () => {

        let Guests = $('[data-testid="structured-search-input-field-guests-button"]');

        Guests.click();

        let increaseBtnAdults = $('[data-testid="stepper-adults-increase-button"]');

        increaseBtnAdults.doubleClick();

        let increaseBtnChildren = $('[data-testid="stepper-children-increase-button"]');

        increaseBtnChildren.click();


        //  browser.pause(5000);

    })


    it('Search for properties', () => {

        let searchBtn = $('[data-testid="structured-search-input-search-button"]');

        searchBtn.click();


        //  browser.pause(5000);

    })

    // it('Verify properties', () => {


    //     browser.pause(30000);

    //     var countTrue = 0
    //     var countFalse = 0

    //     const elem = $$('._kqh46o');
    //     for (var i = 0; i < 40; i++) {
    //         console.log("elem : ", elem[i].getText());
    //         var test = '' + elem[i].getText()
    //         if (test.includes('3 guests')) {
    //             countTrue = countTrue + 1;
    //         } else {
    //             countFalse = countFalse + 1;
    //         }
    //     }
    //     console.log("countTrue", countTrue);
    //     console.log("countFalse", countFalse - 20);

    // })



    //Test 3
    it('Hover over the first property', () => {

        browser.pause(30000);

        $('._8s3ctt').moveTo({
            xOffset: 0,
            yOffset: 0
        });

        //   browser.pause(20000);

    })

    it('Check that the property is displayed on the map and the color changes to indicate the selection', () => {

        //  browser.pause(30000); 

        let propDisplayed = $('[data-veloute="map/markers/BasePillMarker"]');
        propDisplayed.isDisplayed();

        const elem = $('._1nq36y92')
        const color = elem.getCSSProperty('background-color')
        console.log("color", color.value);

        assert.strictEqual(color.value, 'rgba(0,0,0,0)');

    })

    it('After identifying the property on the map, click it', () => {

        //browser.pause(20000);


        //  let mapClick = $('._1m7nqgx'); 
        let mapClick = $('[data-veloute="map/markers/BasePillMarker"]');
        mapClick.click();


    })

    it('Verify that the details shown in the map popup are the same as the ones shown in the search results', () => {

        let test = $('._1x0fg6n');

        let searchDetails = $('._bzh5lkq');
        console.log("_bzh5lkq", searchDetails.getText());

        expect(test).toHaveTextContaining(searchDetails.getText());

        browser.pause(10000);


    })



})