'use strict';
(function (mainName = 'Luchesk') {
	var
		Main,
		Constants,
		Data,
		Elements,
		Functions,
		Modules,
		Variables;

	Main = function (moduleName, dataForModule) {
		if (Main.Modules[moduleName]) {
			Main.Modules[moduleName](dataForModule);
		}
		else {
			console.error(mainName, 'Module', moduleName, 'not registered');
		}
	};

	Constants = Main.Constants = {
		'localStorage': false,
		'sessionStorage': false,
		'storageType': undefined,
		'cookieEnabled': false,
	};
	Data = Main.Data = {};
	Elements = Main.Elements = {};
	Functions = Main.Functions = {};
	Modules = Main.Modules = {};
	Variables = Main.Variables = {};

	if (window[mainName]) {
		console.error('Global variable', mainName, 'already exists. Please, resolve the collision.');
		return;
	}
	else {
		//console.log('Global variable', mainName, 'not exists. We will create it.');
		window[mainName] = Main;
	}

	/** @module fillPage */
	(function () {
		var
			moduleName = 'fillPage',
			E,
			F,
			module;

		module = function (dataForModule) {
			//console.log(`${mainName}.${moduleName}`);
			F.processDataForModule(dataForModule);
		};

		E = module.E = {}; // Elements
		F = module.F = {}; // Functions

		/** @function processDataForModule */
		(function () {
			var
				f,
				functionName = 'processDataForModule';

			f = function (dataForModule) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Data.page) {
					if (Data.page.type) {
						switch (Data.page.type) {
							case 'action-products':
								F.fillPageActionProducts(Data.page.type);
							break;
							case 'action-products-group':
								F.fillPageActionProductsGroup(Data.page.type);
							break;
							case 'album':
								F.fillPageAlbum(Data.page.type);
							break;
							case 'albums-group':
								F.fillPageAlbumsGroup(Data.page.type);
							break;
							case 'albums-groups':
								F.fillPageAlbumsGroups(Data.page.type);
							break;
							case 'article':
								F.fillPageArticle(Data.page.type);
							break;
							case 'authorization':
								F.fillPageAuthorization(Data.page.type);
							break;
							case 'basket':
								F.fillPageBasket(Data.page.type);
							break;
							case 'bookmarks':
								F.fillPageBookmarks(Data.page.type);
							break;
							case 'brand':
								F.fillPageBrand(Data.page.type);
							break;
							case 'brand-products-group':
								F.fillPageBrandProductsGroup(Data.page.type);
							break;
							case 'brands':
								F.fillPageBrands(Data.page.type);
							break;
							case 'catalogue':
								F.fillPageCatalogue(Data.page.type);
							break;
							case 'city':
								F.fillPageCity(Data.page.type);
							break;
							case 'city-group':
								F.fillPageCityGroup(Data.page.type);
							break;
							case 'contacts':
								F.fillPageContacts(Data.page.type);
							break;
							case 'finish':
								F.fillPageFinish(Data.page.type);
							break;
							case 'history':
								F.fillPageHistory(Data.page.type);
							break;
							case 'index':
								F.fillPageIndex(Data.page.type);
							break;
							case 'journal':
								F.fillPageJournal(Data.page.type);
							break;
							case 'journal-group':
								F.fillPageJournalGroup(Data.page.type);
							break;
							case 'order':
								F.fillPageOrder(Data.page.type);
							break;
							case 'product':
								F.fillPageProduct(Data.page.type);
							break;
							case 'products-group':
								F.fillPageProductsGroup(Data.page.type);
							break;
							case 'products-groups-group':
								F.fillPageProductsGroupsGroup(Data.page.type);
							break;
							case 'response':
								F.fillPageResponse(Data.page.type);
							break;
							case 'standard':
								F.fillPageStandard(Data.page.type);
							break;
							case 'user':
								F.fillPageUser(Data.page.type);
							break;
							case 'user-cabinet-profits':
								F.fillPageUserCabinetProfits(Data.page.type);
							break;
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page.type undefined');
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'Data.page undefined');
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToLayer */
		(function () {
			var
				f,
				functionName = 'addEventsToLayer';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					layerWithShadowElements = document.querySelectorAll('.layer.with-shadow'),
					openLayerInfoElements = document.querySelectorAll('[data-open-layer="info"]'),
					closeLayerInterfaceElements = document.querySelectorAll('[data-close-layer=""]');

				if (layerWithShadowElements) {
					Array.prototype.forEach.call(layerWithShadowElements, function (element) {
						element.addEventListener('click', function (event) {
							event.stopPropagation();
							if (event.target === element) {
								element.classList.remove('open');
							}
						});
					});
				}

				if (openLayerInfoElements) {
					Array.prototype.forEach.call(openLayerInfoElements, function (element) {
						if (element.nextElementSibling) {
							element.addEventListener('click', function () {
								element.nextElementSibling.classList.add('open');
							});
						}
					});
				}

				if (closeLayerInterfaceElements) {
					Array.prototype.forEach.call(closeLayerInterfaceElements, function (element) {
						if (element.parentElement.parentElement) {
							element.addEventListener('click', function () {
								element.parentElement.parentElement.classList.remove('open');
							});
						}
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToPageFooter */
		(function () {
			var
				f,
				functionName = 'addEventsToPageFooter';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (Elements.pageFooter) {
					Elements.pageFooterMenuSections = Elements.pageFooter.getElementsByClassName('section');
					Array.prototype.forEach.call(Elements.pageFooterMenuSections, function (element) {
						element.addEventListener('click', function (event) {
							var
								el = event.currentTarget;

							el.classList.toggle('open');
						});
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function addEventsToPageHeader */
		(function () {
			var
				f,
				functionName = 'addEventsToPageHeader';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					Elements.pageHeaderProductGroupsMenu = Elements.pageHeader.querySelector('.second > .main [data-main-menu-item="catalogue"]');
					Elements.pageHeaderMainMenu = Elements.pageHeader.querySelector('.second > .main');
					Elements.pageHeaderHelpMenuMobile = Elements.pageHeader.querySelector('.second > .help');
					Elements.pageHeaderSecondBlock = Elements.pageHeader.querySelector('.second');
					Elements.pageHeaderSecondBlockSwitch = Elements.pageHeader.querySelector('.first > .container > .left > .switch');
					Elements.pageHeaderShadowLayer = Elements.pageHeader.querySelector('body > header > .shadow-layer');
					Elements.pageHeaderSearchSwitch = Elements.pageHeader.querySelector('body > header > .first > .container > .centre > .bottom > .search-container > .switch');
					Elements.pageHeaderSearchInput = Elements.pageHeader.querySelector('body > header > .first > .container > .centre > .bottom > .search-container > .input-block > input');
					Elements.pageHeaderSearchClose = Elements.pageHeader.querySelector('body > header > .first > .container > .centre > .bottom > .search-container > .input-block > .close-search');
					//Elements.pageHeaderSearchClear = Elements.pageHeader.querySelector('body > header > .first > .container > .centre > .bottom > .search-container > .input-block > .clear-search');
					Elements.pageHeaderSearchShadowLayer = Elements.pageHeader.querySelector('body > header > .first > .container > .centre > .bottom > .shadow-layer');
					if (Elements.pageHeaderSecondBlockSwitch && Elements.pageHeaderShadowLayer) {
						Elements.pageHeaderSecondBlockSwitch.addEventListener('click', function () {
							Elements.body.classList.add('page-left-menu-open');
						});
						Elements.pageHeaderShadowLayer.addEventListener('click', function () {
							Elements.body.classList.remove('page-left-menu-open');
						});
					}
					if (Elements.pageHeaderSearchClose) {
						Elements.pageHeaderSearchClose.addEventListener('click', function () {
							Elements.body.classList.remove('search-active');
						});
					}
					if (Elements.pageHeaderSearchSwitch) {
						Elements.pageHeaderSearchSwitch.addEventListener('click', function () {
							Elements.body.classList.add('search-active');
							if (Elements.pageHeaderSearchInput) {
								Elements.pageHeaderSearchInput.focus();
								//console.log('focus');
							}
						});
					}
					if (Elements.pageHeaderSearchInput) {
						Elements.pageHeaderSearchInput.addEventListener('click', function () {
							Elements.body.classList.add('search-active');
						});
					}
					if (Elements.pageHeaderSearchShadowLayer) {
						Elements.pageHeaderSearchShadowLayer.addEventListener('click', function () {
							Elements.body.classList.remove('search-active');
							if (Elements.pageHeaderSearchInput) {
								console.log('clear', Elements.pageHeaderSearchInput);
								Elements.pageHeaderSearchInput.value = '';
							}
						});
					}
					/*if (Elements.pageHeaderSearchClear) {
						Elements.pageHeaderSearchClear.addEventListener('click', function () {
							if (Elements.pageHeaderSearchInput) {
								console.log('clear', Elements.pageHeaderSearchInput);
								Elements.pageHeaderSearchInput.value = '';
								Elements.pageHeaderSearchInput.focus();
							}
						});
					}*/
					if (Elements.pageHeaderUserMenuMobileLoggedSwitch) {
						Elements.pageHeaderUserMenuMobileLoggedSwitch.addEventListener('click', function () {
							if (Elements.pageHeaderSecondBlock) {
								if (Elements.pageHeaderSecondBlock.dataset.menuOpened === 'user') {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = '';
								}
								else {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = 'user';
								}
							}
						});
					}
					if (Elements.pageHeaderUserMenuMobileUnloggedSwitch) {
						Elements.pageHeaderUserMenuMobileUnloggedSwitch.addEventListener('click', function () {
							if (Elements.pageHeaderSecondBlock) {
								if (Elements.pageHeaderSecondBlock.dataset.menuOpened === 'user') {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = '';
								}
								else {
									Elements.pageHeaderSecondBlock.dataset.menuOpened = 'user';
								}
							}
						});
					}
					if (Elements.pageHeaderHelpMenuMobile) {
						Elements.pageHeaderHelpMenuMobileSwitch = Elements.pageHeaderHelpMenuMobile.querySelector('.switch');
						if (Elements.pageHeaderHelpMenuMobileSwitch) {
							Elements.pageHeaderHelpMenuMobileSwitch.addEventListener('click', function () {
								if (Elements.pageHeaderSecondBlock) {
									if (Elements.pageHeaderSecondBlock.dataset.menuOpened === 'help') {
										Elements.pageHeaderSecondBlock.dataset.menuOpened = '';
									}
									else {
										Elements.pageHeaderSecondBlock.dataset.menuOpened = 'help';
									}
								}
							});
						}
					}
					/*if (Elements.pageHeaderProductGroupsMenu) {
						Elements.pageHeaderProductGroupsMenuItemNames = Elements.pageHeader.querySelectorAll('.second > .main [data-main-menu-item="catalogue"] > .items .name');
						if (Elements.pageHeaderProductGroupsMenuItemNames) {
							Array.prototype.forEach.call(Elements.pageHeaderProductGroupsMenuItemNames, function (element) {
								//console.log(element);
								element.addEventListener('click', F.clickPageHeaderProductGroupsMenuItemName);
							});
						}
					}*/
					if (Elements.pageHeaderMainMenu) {
						Elements.pageHeaderMainMenuItemNames = Elements.pageHeader.querySelectorAll('.second > .main > .items .name');
						if (Elements.pageHeaderMainMenuItemNames) {
							Array.prototype.forEach.call(Elements.pageHeaderMainMenuItemNames, function (element) {
								//console.log(element);
								element.addEventListener('click', F.clickPageHeaderProductGroupsMenuItemName);
							});
						}
					}
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function clickPageHeaderProductMainMenuItemName */
		(function () {
			var
				f,
				functionName = 'clickPageHeaderProductMainMenuItemName';

			f = function (event) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					element = event.currentTarget,
					item = element.parentElement,
					items = item.parentElement,
					index = Array.prototype.indexOf.call(items.children, item) + 1;

				if (items.dataset.openedNodeId == index) {
					items.dataset.openedNodeId = '';
				}
				else {
					items.dataset.openedNodeId = index;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function clickPageHeaderProductGroupsMenuItemName */
		(function () {
			var
				f,
				functionName = 'clickPageHeaderProductGroupsMenuItemName';

			f = function (event) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					element = event.currentTarget,
					item = element.parentElement,
					items = item.parentElement,
					index = Array.prototype.indexOf.call(items.children, item) + 1;

				if (items.dataset.openedNodeId == index) {
					items.dataset.openedNodeId = '';
				}
				else {
					items.dataset.openedNodeId = index;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function findElements*/
		(function () {
			var
				f,
				functionName = 'findElements';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				Elements.html = document.documentElement;
				Elements.body = document.body;
				Elements.pageFooter = document.querySelector('body > footer');
				Elements.pageFooterFixedString = Elements.pageFooter.querySelector('.fixed-string');
				Elements.pageFooterNotification = Elements.pageFooter.querySelector('.notification');
				Elements.pageFooterNotificationText = Elements.pageFooterNotification.querySelector('.insert');
				Elements.pageFooterNotificationLink = Elements.pageFooterNotification.querySelector('.link');
				Elements.pageHeader = document.querySelector('body > header');
				Elements.royalSlider = document.getElementById('royalSlider');
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillElementPageFooter */
		(function () {
			var
				f,
				functionName = 'fillElementPageFooter';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageFooter) {
					switch (pageType) {
						case 'action-products':
						case 'action-products-group':
						case 'album':
						case 'albums-group':
						case 'albums-groups':
						case 'article':
						case 'blog':
						case 'index':
						case 'journal':
						case 'journal-group':
							Elements.pageFooterFixedStringCurrentItem = Elements.pageFooterFixedString.querySelector(`[data-${pageType}]`);
							if (Elements.pageFooterFixedStringCurrentItem) {
								Elements.pageFooterFixedStringCurrentItem.classList.add('current');
							}
						break;
					}
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillElementPageHeader */
		(function () {
			var
				f,
				functionName = 'fillElementPageHeader';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (Elements.pageHeader) {
					Elements.pageHeaderShopStatus = Elements.pageHeader.querySelector('.first > .container > .right > .bottom > .status');
					Elements.pageHeaderUserMenuDesktop = Elements.pageHeader.querySelector('.first > .container > .right > .top > .menu.user');
					Elements.pageHeaderUserMenuMobile = Elements.pageHeader.querySelector('.second > .menu.user');
					if (Elements.pageHeaderShopStatus && Data.shop.status) {
						switch (Data.shop.status) {
							case 'online':
							case 'offline':
								Elements.pageHeaderShopStatus.classList.add(Data.shop.status);
							break;
						}
					}
					if (typeof Data.user === 'object' && typeof Data.user.name === 'string' && Data.user.name != '') {
						if (Elements.pageHeaderUserMenuDesktop) {
							Elements.pageHeaderUserMenuDesktopUserName = Elements.pageHeaderUserMenuDesktop.querySelector('.items > .user-name');
							Elements.pageHeaderUserMenuDesktopUserIcon = Elements.pageHeaderUserMenuDesktop.querySelector('.switch[data-user="logged"] > .icon');
							Elements.pageHeaderUserMenuDesktop.dataset.user = 'logged';
							Elements.pageHeaderUserMenuDesktopUserName.textContent = Data.user.name;
							if (Elements.pageHeaderUserMenuDesktopUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar != '') {
									Elements.pageHeaderUserMenuDesktopUserIcon.classList.add('avatar');
									Elements.pageHeaderUserMenuDesktopUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderUserMenuDesktopUserIcon.classList.add('font');
								}
							}
						}
						if (Elements.pageHeaderUserMenuMobile) {
							Elements.pageHeaderUserMenuMobileLoggedSwitch = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="logged"]');
							Elements.pageHeaderUserMenuMobileUserName = Elements.pageHeaderUserMenuMobile.querySelector('.user-name');
							Elements.pageHeaderUserMenuMobileUserIcon = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="logged"] > .icon');
							Elements.pageHeaderUserMenuMobile.dataset.user = 'logged';
							if (Elements.pageHeaderUserMenuMobileUserName) {
								Elements.pageHeaderUserMenuMobileUserName.textContent = Data.user.name;
							}
							if (Elements.pageHeaderUserMenuMobileUserIcon) {
								if (typeof Data.user.avatar === 'string' && Data.user.avatar != '') {
									Elements.pageHeaderUserMenuMobileUserIcon.classList.add('avatar');
									Elements.pageHeaderUserMenuMobileUserIcon.style.backgroundImage = `url(${Data.user.avatar})`;
								}
								else {
									Elements.pageHeaderUserMenuMobileUserIcon.classList.add('font');
								}
							}
						}
					}
					else {
						Elements.pageHeaderUserMenuMobileUnloggedSwitch = Elements.pageHeaderUserMenuMobile.querySelector('.switch[data-user="not-logged"]');
						if (Elements.pageHeaderUserMenuDesktop) {
							Elements.pageHeaderUserMenuDesktop.dataset.notPresent = '';
						}
						if (Elements.pageHeaderUserMenuMobile) {
							Elements.pageHeaderUserMenuMobile.dataset.notPresent = '';
						}
					}
					/*
					if (typeof Data.page.currentPageHeaderProductGroupsMenuSection === 'string' && Data.page.currentPageHeaderProductGroupsMenuSection != '') {
						Elements.currentPageHeaderProductGroupsMenuSection = Elements.pageHeader.querySelector(`.second > .product-groups [data-group-id='${Data.page.currentPageHeaderProductGroupsMenuSection}']`);
						if (Elements.currentPageHeaderProductGroupsMenuSection) {
							Elements.currentPageHeaderProductGroupsMenuSection.classList.add('current');
						}
					}
					*/
					if (typeof Data.page.currentPageHeaderMainMenuSection === 'string' && Data.page.currentPageHeaderMainMenuSection != '') {
						Elements.currentPageHeaderMainMenuSection = Elements.pageHeader.querySelector(`.second > .menu.main [data-main-menu-item='${Data.page.currentPageHeaderMainMenuSection}']`);
						if (Elements.currentPageHeaderMainMenuSection) {
							Elements.currentPageHeaderMainMenuSection.classList.add('current');
						}
					}
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageActionProducts */
		(function () {
			var
				f,
				functionName = 'fillPageActionProducts';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageActionProductsGroup */
		(function () {
			var
				f,
				functionName = 'fillPageActionProductsGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageAlbumsGroup */
		(function () {
			var
				f,
				functionName = 'fillPageAlbumsGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);

				Elements.tagMenuSectionHeader = document.querySelectorAll('main > .albums-group > .blocks > .first > .menu > .section');
				Array.prototype.forEach.call(Elements.tagMenuSectionHeader, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget;

						el.classList.toggle('open');
					});
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageAlbumsGroups */
		(function () {
			var
				f,
				functionName = 'fillPageAlbumsGroups';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageAlbum */
		(function () {
			var
				f,
				functionName = 'fillPageAlbum';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
				if(window.$ && $('#royalSlider').length > 0 ) {
					$('#royalSlider').royalSlider({
						fullscreen: {
							enabled: true,
							nativeFS: true
						},
						controlNavigation: 'thumbnails',
						loop: true,
						arrowsNavHideOnTouch: true,
						keyboardNavEnabled: true,
						globalCaptionInside: false,
						thumbs: {
							appendSpan: true,
						},
					});
				}
				window.addEventListener('load', function () {
				});
				window.addEventListener('resize', F.updateRoyalSliderSize);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageArticle */
		(function () {
			var
				f,
				functionName = 'fillPageArticle';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', function () {
					F.placeGroupCardContainer('load');
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageAuthorization */
		(function () {
			var
				f,
				functionName = 'fillPageAuthorization';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageBasket */
		(function () {
			var
				f,
				functionName = 'fillPageBasket';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageBookmarks */
		(function () {
			var
				f,
				functionName = 'fillPageBookmarks';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageBrand */
		(function () {
			var
				f,
				functionName = 'fillPageBrand';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageBrandProductsGroup */
		(function () {
			var
				f,
				functionName = 'fillPageBrandProductsGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
				F.processRawCataloguesData();
				Modules.catalogue.F.show({
					'catalogueValue': Variables.catalogues.get('products'),
					'processFilteringInterface': 'doAll',
					'showSortingInterface': true,
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageBrands */
		(function () {
			var
				f,
				functionName = 'fillPageBrands';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCatalogue */
		(function () {
			var
				f,
				functionName = 'fillPageCatalogue';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCity */
		(function () {
			var
				f,
				functionName = 'fillPageCity';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					currentDayElement;

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageCityGroup */
		(function () {
			var
				f,
				functionName = 'fillPageCityGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					currentDayElement;

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageContacts */
		(function () {
			var
				f,
				functionName = 'fillPageContacts';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					currentDayElement;

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				if (Data.shop.weekday) {
					currentDayElement = document.querySelector(`.shopping-hours > [data-weekday="${Data.shop.weekday}"]`);
					if (currentDayElement) {
						currentDayElement.classList.add('current');
					}
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageFinish */
		(function () {
			var
				f,
				functionName = 'fillPageFinish';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageHistory */
		(function () {
			var
				f,
				functionName = 'fillPageHistory';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				Elements.orderSwitches = document.querySelectorAll('main .user-cabinet .second .order .switch');
				Array.prototype.forEach.call(Elements.orderSwitches, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget;

						el.parentElement.classList.toggle('open');
					});
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageIndex */
		(function () {
			var
				f,
				functionName = 'fillPageIndex';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageJournal */
		(function () {
			var
				f,
				functionName = 'fillPageJournal';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageJournalGroup */
		(function () {
			var
				f,
				functionName = 'fillPageJournalGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageOrder */
		(function () {
			var
				f,
				functionName = 'fillPageOrder';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageProduct */
		(function () {
			var
				f,
				functionName = 'fillPageProduct';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					addToBasketElement,
					additionalAddToBasketElement,
					layerAddedToBasketElement = document.querySelector('[data-layer-type="added-to-basket"]'),
					closeLayerAddedToBasketElement = document.querySelector('[data-close-layer="added-to-basket"]'),
					mainProductInfoElement = document.querySelector('main > .standard-container > .blocks > .main-info'),
					similarProductsElement = document.querySelector('#similarProducts');

				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
				if(window.$ && $('#royalSlider').length > 0 ) {
					$('#royalSlider').royalSlider({
						fullscreen: {
							enabled: true,
							nativeFS: true
						},
						controlNavigation: 'thumbnails',
						loop: true,
						arrowsNavHideOnTouch: true,
						keyboardNavEnabled: true,
						globalCaptionInside: false,
						thumbs: {
							appendSpan: true,
						},
					});
				}
				window.addEventListener('resize', F.updateRoyalSliderSize);
				if (mainProductInfoElement) {
					addToBasketElement = mainProductInfoElement.querySelector('.blocks > .first > .basket > button.green');
					additionalAddToBasketElement = mainProductInfoElement.querySelector('.blocks > .first > .basket > button.additional');
				}
				if (addToBasketElement && additionalAddToBasketElement && similarProductsElement) {
					window.addEventListener('scroll', function () {
						if (
							(addToBasketElement.offsetTop + addToBasketElement.offsetHeight < window.scrollY)
							&& (similarProductsElement.offsetTop > (window.innerHeight + window.scrollY))
						) {
							additionalAddToBasketElement.classList.add('visible');
						}
						else {
							additionalAddToBasketElement.classList.remove('visible');
						}
					});
					window.addEventListener('resize', function () {
						if (
							(addToBasketElement.offsetTop + addToBasketElement.offsetHeight < window.scrollY)
							&& (similarProductsElement.offsetTop > (window.innerHeight + window.scrollY))
						) {
							additionalAddToBasketElement.classList.add('visible');
						}
						else {
							additionalAddToBasketElement.classList.remove('visible');
						}
					});
					addToBasketElement.addEventListener('click', function () {
						layerAddedToBasketElement.classList.add('open');
						mainProductInfoElement.classList.add('in-basket');
					});
					additionalAddToBasketElement.addEventListener('click', function () {
						layerAddedToBasketElement.classList.add('open');
						mainProductInfoElement.classList.add('in-basket');
					});
				}
				if (closeLayerAddedToBasketElement) {
					closeLayerAddedToBasketElement.addEventListener('click', function () {
						layerAddedToBasketElement.classList.remove('open');
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageProductsGroup */
		(function () {
			var
				f,
				functionName = 'fillPageProductsGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
				window.addEventListener('load', function () {
					//F.placeThematicArticlesList('load');
					F.placeFilterMenu__additionalSwitch('load');
				});
				F.processRawCataloguesData();
				Modules.catalogue.F.show({
					'catalogueValue': Variables.catalogues.get('products'),
					'processFilteringInterface': 'doAll',
					'showSortingInterface': true,
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageProductsGroupsGroup */
		(function () {
			var
				f,
				functionName = 'fillPageProductsGroupsGroup';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageResponse */
		(function () {
			var
				f,
				functionName = 'fillPageResponse';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageStandard */
		(function () {
			var
				f,
				functionName = 'fillPageStandard';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				F.showVideo();
				window.addEventListener('load', F.insertImage);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageUser */
		(function () {
			var
				f,
				functionName = 'fillPageUser';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.fillElementPageFooter(pageType);
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function fillPageUserCabinetProfits */
		(function () {
			var
				f,
				functionName = 'fillPageUserCabinetProfits';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				F.findElements();
				F.setPageType(pageType);
				F.fillElementPageHeader();
				F.addEventsToPageHeader();
				F.addEventsToPageFooter();
				F.addEventsToLayer();
				Elements.orderSwitches = document.querySelectorAll('main .user-cabinet .second .order .switch');
				Array.prototype.forEach.call(Elements.orderSwitches, function (element) {
					element.addEventListener('click', function (event) {
						var
							el = event.currentTarget;

						el.parentElement.classList.toggle('open');
					});
				});
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function insertImage */
		(function () {
			var
				f,
				functionName = 'insertImage';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					imgSrcItems = document.querySelectorAll('.image[data-for-insert-img-src]'),
					imgUrlItems = document.querySelectorAll('.image[data-for-insert-img-url]');

				Array.prototype.forEach.call(imgSrcItems,
					function (item) {
						item.innerHTML = `<img src="${item.dataset.forInsertImgSrc}" alt="${item.dataset.forInsertImgAlt}">`;
					}
				);
				Array.prototype.forEach.call(imgUrlItems,
					function (item) {
						item.style.backgroundImage = `url(${item.dataset.forInsertImgUrl})`;
					}
				);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function setPageType */
		(function () {
			var
				f,
				functionName = 'setPageType';

			f = function (pageType) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (pageType) {
					if (typeof pageType === 'string') {
						Elements.body.dataset.pageType = pageType;
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'typeof pageType is not string');
						return;
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, 'pageType not set');
					return;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function placeGroupCardContainer */
		(function () {
			var
				f,
				functionName = 'placeGroupCardContainer';

			f = function (action) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				switch (action) {
					case 'load':
						Elements.mainBlocksFirst = document.querySelector('main > .blocks > .first');
						Elements.groupCardContainer = document.querySelector('main > .blocks > .second > .group-card-container');
						if (Elements.mainBlocksFirst && Elements.groupCardContainer) {
							Variables.blockStartFixPosition = Elements.mainBlocksFirst.offsetTop + Elements.groupCardContainer.offsetTop - 16;
							Variables.blockEndFixPosition = Elements.mainBlocksFirst.offsetHeight + Elements.mainBlocksFirst.offsetTop - Elements.groupCardContainer.offsetHeight - 32;
							Variables.blockAbsolutePosition = Variables.blockEndFixPosition - Elements.mainBlocksFirst.offsetTop;
							Variables.blockState = 'normal';
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
									Variables.blockState = 'fixed';
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
									Variables.blockState = 'absolute';
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
							window.addEventListener('scroll', function () {
								F.placeGroupCardContainer('scroll');
							});
							window.addEventListener('resize', function () {
								F.placeGroupCardContainer('resize');
							});
						}
					break;
					case 'scroll':
						if (Elements.mainBlocksFirst && Elements.groupCardContainer && Variables.blockStartFixPosition && Variables.blockEndFixPosition && Variables.blockAbsolutePosition && Variables.blockState) {
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									if (Variables.blockState !== 'fixed') {
										Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
										Variables.blockState = 'fixed';
									}
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									if (Variables.blockState !== 'absolute') {
										Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
										Variables.blockState = 'absolute';
									}
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
						}
					break;
					case 'resize':
						if (Elements.mainBlocksFirst && Elements.groupCardContainer) {
							Elements.groupCardContainer.style = '';
							Variables.blockStartFixPosition = Elements.mainBlocksFirst.offsetTop + Elements.groupCardContainer.offsetTop - 16;
							Variables.blockEndFixPosition = Elements.mainBlocksFirst.offsetHeight + Elements.mainBlocksFirst.offsetTop - Elements.groupCardContainer.offsetHeight - 32;
							Variables.blockAbsolutePosition = Variables.blockEndFixPosition - Elements.mainBlocksFirst.offsetTop;
							Variables.blockState = 'normal';
							if (window.innerWidth > 1023) {
								if ((window.pageYOffset > Variables.blockStartFixPosition) && (window.pageYOffset < Variables.blockEndFixPosition)) {
									Elements.groupCardContainer.style = 'position: fixed; top: 0; max-width: 284px; width: 100%;';
									Variables.blockState = 'fixed';
								}
								else if (window.pageYOffset >= Variables.blockEndFixPosition) {
									Elements.groupCardContainer.style = `position: absolute; top: ${Variables.blockAbsolutePosition}px;`;
									Variables.blockState = 'absolute';
								}
								else {
									Elements.groupCardContainer.style = '';
									Variables.blockState = 'normal';
								}
							}
							else {
								Elements.groupCardContainer.style = '';
								Variables.blockState = 'normal';
							}
						}
					break;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function placeFilterMenu__additionalSwitch */
		(function () {
			var
				f,
				functionName = 'placeFilterMenu__additionalSwitch';

			f = function (action) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var p = document.querySelector('main > .blocks > .first');
				var cards = document.querySelector('main > .blocks > .second');
				var ep = document.querySelector('.menu.filtering');
				var e = document.querySelector('.filterMenu__additionalSwitch');
				var a = document.querySelector('.thematicArticlesList');
				//var articlesOffsetTop;
				var c = document.querySelector('main > .blocks > .second > .product-catalogue');
				if (p && e && ep && a) {
				}
				/*else if (p && a) {
					F.placeThematicArticlesList('load');
				}*/
				else {
					return;
				}

				function setClass () {
					if (window.innerWidth > 1023 && ((c.offsetHeight + c.offsetTop) > (a.offsetHeight + Variables.articlesOffsetTop))) {
						if ((window.pageYOffset > Variables.filterMenu__additionalSwitch.elementStartFixedPosition) && (window.pageYOffset < Variables.filterMenu__additionalSwitch.elementEndFixedPosition)) {
							e.className = 'filterMenu__additionalSwitch filterMenu__additionalSwitch--fixedPosition';
							e.style = '';
							a.className = 'thematicArticlesList thematicArticlesList--fixedPosition';
						}
						else if (window.pageYOffset >= Variables.filterMenu__additionalSwitch.elementEndFixedPosition) {
							e.className = 'filterMenu__additionalSwitch filterMenu__additionalSwitch--absolutePosition';
							e.style.bottom = `${a.offsetHeight + 16}px`;
							a.className = 'thematicArticlesList thematicArticlesList--absolutePosition';
						}
						else {
							e.className = 'filterMenu__additionalSwitch';
							e.style = '';
							a.className = 'thematicArticlesList';
						}
					}
					else if (window.innerWidth <= 1023) {
						e.className = 'filterMenu__additionalSwitch';
						e.style = '';
						a.className = 'thematicArticlesList';
						if (
							((p.offsetTop + ep.offsetTop + ep.offsetHeight) < window.scrollY)
							&& ((cards.offsetTop + cards.offsetHeight ) > window.scrollY)
							) {
							e.classList.add('filterMenu__additionalSwitch--visible');
						}
						else {
							e.classList.remove('filterMenu__additionalSwitch--visible');
						}
					}
					else {
						e.className = 'filterMenu__additionalSwitch';
						e.style = '';
						a.className = 'thematicArticlesList';
					}
				}

				switch (action) {
					case 'load':
						// console.log('load');
						Variables.filterMenu__additionalSwitch = {};
						Variables.filterMenu__additionalSwitch.elementStartFixedPosition = p.offsetTop + ep.offsetTop + ep.offsetHeight - e.offsetHeight - 16;
						Variables.filterMenu__additionalSwitch.elementEndFixedPosition =  p.offsetTop + p.offsetHeight - a.offsetHeight - e.offsetHeight - 32;
						Variables.articlesOffsetTop = a.offsetTop;
						setClass();
						window.addEventListener('scroll', function () {
							F.placeFilterMenu__additionalSwitch('scroll');
						});
						window.addEventListener('resize', function () {
							F.placeFilterMenu__additionalSwitch('resize');
						});
					break;
					case 'scroll':
						//console.log('scroll');
						setClass();
					break;
					case 'resize':
						// console.log('resize');
						e.className = 'filterMenu__additionalSwitch';
						e.style = '';
						a.className = 'thematicArticlesList';
						Variables.filterMenu__additionalSwitch.elementStartFixedPosition = p.offsetTop + ep.offsetTop + ep.offsetHeight - e.offsetHeight - 16;
						Variables.filterMenu__additionalSwitch.elementEndFixedPosition =  p.offsetTop + p.offsetHeight - a.offsetHeight - e.offsetHeight - 32;
						Variables.articlesOffsetTop = a.offsetTop;
						setClass();
					break;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function placeThematicArticlesList */
		(function () {
			var
				f,
				functionName = 'placeThematicArticlesList';

			f = function (action) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var p = document.querySelector('main > .blocks > .first');
				var e = document.querySelector('.thematicArticlesList');
				if (p && e) {
					e.className = 'thematicArticlesList';
					e.style = '';
				}
				else {
					return;
				}

				function setClass () {
					if (window.innerWidth > 1023) {
						if ((window.pageYOffset > Variables.thematicArticlesList.elementStartFixedPosition) && (window.pageYOffset < Variables.thematicArticlesList.elementEndFixedPosition)) {
							e.className = 'thematicArticlesList thematicArticlesList--fixedPosition';
						}
						else if (window.pageYOffset >= Variables.thematicArticlesList.elementEndFixedPosition) {
							e.className = 'thematicArticlesList thematicArticlesList--absolutePosition';
						}
						else {
							e.className = 'thematicArticlesList';
						}
					}
					else {
						e.className = 'thematicArticlesList';
					}
				}

				switch (action) {
					case 'load':
						//console.log('load');
						Variables.thematicArticlesList = {};
						Variables.thematicArticlesList.elementStartFixedPosition = p.offsetTop + e.offsetTop - 94;
						Variables.thematicArticlesList.elementEndFixedPosition = p.offsetTop + p.offsetHeight  - e.offsetHeight - 64;
						setClass();
						window.addEventListener('scroll', function () {
							F.placeThematicArticlesList('scroll');
						});
						window.addEventListener('resize', function () {
							F.placeThematicArticlesList('resize');
						});
					break;
					case 'scroll':
						//console.log('scroll');
						setClass();
					break;
					case 'resize':
						//console.log('resize');
						Variables.thematicArticlesList.elementStartFixedPosition = p.offsetTop + e.offsetTop - 16;;
						Variables.thematicArticlesList.elementEndFixedPosition = p.offsetTop + p.offsetHeight  - e.offsetHeight - 64;
						setClass();
					break;
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function processRawCataloguesData */
		(function () {
			var
				f,
				functionName = 'processRawCataloguesData';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (!Variables.catalogues) {
					Variables.catalogues = new Map([]);
				}
				if (Data.catalogues && Data.catalogues.size > 0) {
					Data.catalogues.forEach(function (value, key) {
						var
							result;

						result = Modules.catalogue.F.processRawData(value);
						if (typeof result === 'object') {
							Variables.catalogues.set(key, result);
						}
					});
				}
				console.log(`${mainName}.Variables.catalogues`, Variables.catalogues);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function showCatalogueProducts */
		(function () {
			var
				f,
				functionName = 'showCatalogueProducts';

			f = function (catalogueValue, reason) {
				console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					e = document.createElement('div'),
					linkElement = Elements.pageFooterNotificationLink,
					source;

				if (typeof catalogueValue === 'object') {
					if (catalogueValue.itemsKeysForShow) {
						source = catalogueValue.itemsKeysForShow;
					}
					else {
						source = catalogueValue.items;
					}
					source.forEach(function (catalogueItemKey) {
						var
							catalogueItemValue = catalogueValue.items.get(catalogueItemKey);

						if (typeof catalogueItemValue === 'object') {
							e.insertAdjacentHTML('beforeend', `
								<a class="item ${catalogueItemValue.bookmarked} ${catalogueItemValue.action}" href="${catalogueItemValue.productUrl}" title="${catalogueItemValue.productTitle}"data-product-key="${catalogueItemKey}">
									<div class="image"><img src="${catalogueItemValue.productImageUrl}" alt="${(catalogueItemValue.productDescription || '')}"></div>
									<div class="brand">${catalogueItemValue.productBrandName}</div>
									<div class="name">${catalogueItemValue.productProducerName}</div>
									<div class="price">
										<span class="new-price">${catalogueItemValue.productPrice} ${catalogueItemValue.productPriceCurrency}</span>
										<span class="old-price" data-old-price="${catalogueItemValue.productOldPrice}">${catalogueItemValue.productOldPrice} ${catalogueItemValue.productPriceCurrency}</span>
									</div>
									<div class="saving" data-old-price="${catalogueItemValue.productOldPrice}">${catalogueItemValue.saving} ${catalogueItemValue.productPriceCurrency}</div>
									<div class="bookmark"></div>
									<div class="action-label"></div>
								</a>
							`);
						}
					});
					catalogueValue.itemsInterfaceElement.innerHTML= e.innerHTML;
					e.remove();
					Elements.pageFooterNotification.classList.remove('enable');
					Elements.pageFooterNotificationLink.classList.remove('enable');
					window.setTimeout(function () {
						if (catalogueValue.itemsKeysForShow.size > 0) {
							Elements.pageFooterNotificationLink.classList.add('enable');
						}
						switch (reason) {
							case 'sorting':
								if (catalogueValue.itemsKeysForShow.size > 1) {
									Elements.pageFooterNotificationText.innerHTML = catalogueValue.sorting.items.get(catalogueValue.sorting.currentState).name;
									linkElement.parentNode.replaceChild(linkElement.cloneNode(true), linkElement);
									Elements.pageFooterNotificationLink = Elements.pageFooterNotification.querySelector('.link');
									if (Elements.pageFooterNotificationLink) {
										Elements.pageFooterNotificationLink.addEventListener('click', function () {
											catalogueValue.itemsInterfaceElement.scrollIntoView();
											if (window.innerWidth < 1024) {
												window.scrollBy(0, -64);
											}
										});
									}
									Elements.pageFooterNotification.dataset.action = reason;
									Elements.pageFooterNotification.classList.add('enable');
								}
							break;
							case 'filtering':
								Elements.pageFooterNotificationText.innerHTML = catalogueValue.itemsKeysForShow.size;
								linkElement.parentNode.replaceChild(linkElement.cloneNode(true), linkElement);
								Elements.pageFooterNotificationLink = Elements.pageFooterNotification.querySelector('.link');
								if (Elements.pageFooterNotificationLink) {
									Elements.pageFooterNotificationLink.addEventListener('click', function () {
										switch (catalogueValue.filtering.interfaceType) {
											case 'products':
												var
													filteringMenuElement = document.querySelector(catalogueValue.filtering.interfaces.filteringMenuElement.selector);

												filteringMenuElement.classList.remove('open');
												filteringMenuElement.scrollIntoView();
												if (window.innerWidth < 1024) {
													window.scrollBy(0, -64);
												}
											break;
										}
									});
								}
								Elements.pageFooterNotification.dataset.action = reason;
								Elements.pageFooterNotification.classList.add('enable');
							break;
						}
					}, 100);
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function collapseFilter */
		(function () {
			var
				f,
				functionName = 'collapseFilter';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function updateRoyalSliderSize */
		(function () {
			var
				f,
				functionName = 'updateRoyalSliderSize';

			f = function () {
				//console.log(mainName, moduleName, functionName, arguments);
				if (window.$) {
					if (Elements.royalSlider) {
						window.$('#royalSlider').royalSlider('updateSliderSize', true);
						window.setTimeout(function() {window.$('#royalSlider').royalSlider('updateSliderSize', true);}, 400);
					}
				}
				window.setTimeout(F.showProductPageAdditionalButtons, 400);
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function showVideo */
		(function () {
			var
				f,
				functionName = 'showVideo';

			f = function () {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					figureVideoElements = document.querySelectorAll('figure[data-video-type="youtube"]');

				if (figureVideoElements) {
					Array.prototype.forEach.call(figureVideoElements, function (element) {
						switch (element.dataset.videoType) {
							case 'youtube':
								element.insertAdjacentHTML('beforeend',
									`<div class="container"><iframe src="https://www.youtube-nocookie.com/embed/${element.dataset.videoId}" allowfullscreen></iframe></div>`
								);
							break;
						}
						element.insertAdjacentHTML('beforeend',
							`<figcaption>${element.dataset.videoCaption}</figcaption>`
						);
					});
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		Modules[moduleName] = module;
	})();
	///////////////////////////////////////////////////////////////////////////////////////////////

	/** @module catalogue */
	(function () {
		var
			moduleName = 'catalogue',
			E,
			F,
			module;

		module = function (dataForModule) {
			//console.log(`${mainName}.${moduleName}`);

			//F.processDataForModule(dataForModule);
		};

		E = module.E = {}; // Elements
		F = module.F = {}; // Functions

		/** @function processDataForModule */
		(function () {
			var
				f,
				functionName = 'processDataForModule';

			f = function (dataForModule) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
			};
			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function processRawData */
		(function () {
			var
				f,
				functionName = 'processRawData';


			f = function (argument) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				if (typeof argument === 'object') {
					var
						result = {
							'filtering': {
								'data': new Map([]),
								'currentState': new Map([]),
								'properties': new Map([]),
							},
							'sorting': {
								'enabled': false,
								'switchInterfaceEnabled': undefined,
								'switchInterfaceElement': undefined,
								'items': new Map([]),
								'itemsInterfaceType': undefined,
								'itemsInterfaceElement': undefined,
								'currentState': undefined,
							},
							'items': new Map([]),
							'itemsInterfaceElement': undefined,
						};

					if (typeof argument.functionToShowCatalogue === 'function') {
						result.functionToShowCatalogue = argument.functionToShowCatalogue;
						if (typeof argument.itemsInterfaceSelector === 'string' && argument.itemsInterfaceSelector !== '') {
							result.itemsInterfaceElement = document.querySelector(argument.itemsInterfaceSelector);
							if (result.itemsInterfaceElement) {
								if (typeof argument.items === 'object' && argument.items.size > 0) {
									// process raw items data
									argument.items.forEach(function (catalogueItemValue, catalogueItemKey) {
										if (typeof catalogueItemValue === 'object') {
											result.items.set(catalogueItemKey, catalogueItemValue);
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue' is not object '${catalogueItemValue}'`);
										}
									});
									if (result.items.size > 0) {
										// process raw sorting data
										if (typeof argument.sorting === 'object') {
											if (argument.sorting.enabled === true) {
												switch (argument.sorting.itemsInterfaceType) {
													case 'menu': // may be other type
														result.sorting.itemsInterfaceType = argument.sorting.itemsInterfaceType;
														if (typeof argument.sorting.itemsInterfaceSelector === 'string' && argument.sorting.itemsInterfaceSelector !== '') {
															result.sorting.itemsInterfaceElement = document.querySelector(argument.sorting.itemsInterfaceSelector);
															if (result.sorting.itemsInterfaceElement) {
																result.sorting.itemsInterfaceSelector = argument.sorting.itemsInterfaceSelector;
																if (typeof argument.sorting.items === 'object' && argument.sorting.items.size > 0) {
																	argument.sorting.items.forEach(function (sortingItemValue, sortingItemKey) {
																		if (typeof sortingItemValue === 'object') {
																			if (typeof sortingItemValue.name === 'string' && sortingItemValue.name !=='') {
																				if (typeof sortingItemValue.property === 'string' && sortingItemValue.property !=='') {
																					if (typeof sortingItemValue.type === 'string' && sortingItemValue.type !=='') {
																						if (typeof sortingItemValue.order === 'string' && sortingItemValue.order !=='') {
																							result.sorting.items.set(sortingItemKey, sortingItemValue);
																						}
																						else {
																							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.order' is bad '${sortingItemValue.order}'`);
																						}
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.type' is bad '${sortingItemValue.type}'`);
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.property' is bad '${sortingItemValue.property}'`);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue.name' is bad '${sortingItemValue.name}'`);
																			}
																		}
																		else {
																			console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'sortingItemValue' is not object '${sortingItemValue}'`);
																		}
																	});
																}
																else {
																	console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.items' is bad '${argument.sorting.items}'`);
																}
															}
															else {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.sorting.itemsInterfaceElement' not found '${argument.sorting.itemsInterfaceSelector}'`);
															}
														}
														else {
															console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.itemsInterfaceSelector' is bad '${argument.sorting.itemsInterfaceSelector}'`);
														}
														if (result.sorting.items.size > 0) {
															if (argument.sorting.switchInterfaceEnabled === true) {
																if (typeof argument.sorting.switchInterfaceSelector === 'string' && argument.sorting.switchInterfaceSelector !== '') {
																	result.sorting.switchInterfaceElement = document.querySelector(argument.sorting.switchInterfaceSelector);
																	if (result.sorting.switchInterfaceElement) {
																		result.sorting.switchInterfaceSelector = argument.sorting.switchInterfaceSelector;
																		result.sorting.switchInterfaceEnabled = true;
																		result.sorting.enabled = true;
																	}
																	else {
																		console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.sorting.switchInterfaceElement' not found '${argument.sorting.switchInterfaceSelector}'`);
																	}
																}
																else {
																	console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting.switchInterfaceSelector' is bad '${argument.sorting.switchInterfaceSelector}'`);
																}
															}
															else if (argument.sorting.switchInterfaceEnabled === false) {
																result.sorting.switchInterfaceEnabled = false;
																result.sorting.enabled = true;
															}
														}
													break;
												}
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sorting' is not object '${argument.sorting}'`);
										}

										// process raw filtering data
										if (typeof argument.filtering === 'object') {
											if (argument.filtering.enabled === true) {
												if (typeof argument.filtering.data === 'object' && argument.filtering.data.size > 0) {
													argument.filtering.data.forEach(function (propertyDataValue, propertyDataKey) {
														if (typeof propertyDataValue === 'object') {
															if (!(typeof propertyDataValue.name === 'string' && propertyDataValue.name !=='')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.name' is bad '${propertyDataValue.name}'`);
																return;
															}
															if (!(typeof propertyDataValue.property === 'string' && propertyDataValue.property !=='')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.property' is bad '${propertyDataValue.property}'`);
																return;
															}
															if (!(typeof propertyDataValue.order === 'string' && propertyDataValue.order !=='')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.order' is bad '${propertyDataValue.order}'`);
																return;
															}
															if (!(typeof propertyDataValue.type === 'string' && propertyDataValue.type !=='')) {
																console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue.type' is bad '${propertyDataValue.type}'`);
																return;
															}
															switch (propertyDataValue.type) {
																case 'string':
																case 'number':
																	result.filtering.data.set(propertyDataKey, propertyDataValue);
																break;
																case 'fillOrEmptyString':
																	if (!(typeof propertyDataValue.valuesReplacement === 'object'
																		&& typeof propertyDataValue.valuesReplacement.fill === 'string'
																		&& propertyDataValue.valuesReplacement.fill !== ''
																		&& typeof propertyDataValue.valuesReplacement.empty === 'string'
																		&& propertyDataValue.valuesReplacement.empty !== '')
																	) {
																		propertyDataValue.valuesReplacement = {'fill': 'true', 'empty': 'false'};
																	}
																	result.filtering.data.set(propertyDataKey, propertyDataValue);
																break;
															}
														}
														else {
															console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'propertyDataValue' is not object '${propertyDataValue}'`);
														}
													});
													if (result.filtering.data.size > 0) {
														result.filtering.data.forEach(function (propertyDataValue, propertyDataKey) {
															var
																values,
																propertyValuesSet = new Set([]);

															result.items.forEach(function (catalogueItemValue, catalogueItemKey) {
																var
																	property;

																if (catalogueItemValue.hasOwnProperty(propertyDataValue.property)) {
																	property = catalogueItemValue[propertyDataValue.property];
																	switch (propertyDataValue.type) {
																		case 'string':
																			if (typeof property === 'string') {
																				if (property !== '') {
																					propertyValuesSet.add(property);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' must be string '${property}'`);
																			}
																		break;
																		case 'fillOrEmptyString':
																			if (typeof property === 'string') {
																				if (property !== '') {
																					propertyValuesSet.add(1);
																				}
																				else {
																					propertyValuesSet.add(0);
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' is not string '${property}'`);
																			}
																		break;
																		case 'number':
																			if (typeof property === 'number') {
																				propertyValuesSet.add(property);
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueItemValue.property' is not number '${property}'`);
																			}
																		break;
																	}
																}
															});

															if (propertyValuesSet.size > 1) {
																values = [...propertyValuesSet];
																switch (propertyDataValue.type) {
																	case 'string':
																		switch (propertyDataValue.order) {
																			case 'ab':
																				values.sort(function (a, b) {
																					return a.localeCompare(b);
																				});
																			break;
																			case 'ba':
																				values.sort(function (a, b) {
																				return b.localeCompare(a);
																				});
																			break;
																		}
																	break;
																	case 'fillOrEmptyString':
																		switch (propertyDataValue.order) {
																			case 'ef':
																				values.sort(function (a, b) {
																					return a - b;
																				});
																			break;
																			case 'fe':
																				values.sort(function (a, b) {
																				return b - a;
																				});
																			break;
																		}
																	break;
																	case 'number':
																		switch (propertyDataValue.order) {
																			case '01':
																				values.sort(function (a, b) {
																					return a - b;
																				});
																			break;
																			case '10':
																				values.sort(function (a, b) {
																				return b - a;
																				});
																			break;
																		}
																	break;
																}
																result.filtering.properties.set(propertyDataKey, {'name': propertyDataValue.name, 'property': propertyDataValue.property, 'type': propertyDataValue.type, 'valuesReplacement': propertyDataValue.valuesReplacement, values});
															}
														});
														if (result.filtering.properties.size > 0) {
															result.filtering.enabled = true;
															if (argument.filtering.interfaceEnabled === true) {
																switch (argument.filtering.interfaceType) {
																	case 'products':
																		var
																			element,
																			interfaces = {
																				'additionalSwitchElement': {
																				},
																				'collapseElement': {
																				},
																				'blocksElement': {
																				},
																				'filteringMenuElement': {
																				},
																				'propertiesContainerElement': {
																				},
																				'resetElement': {
																				},
																				'switchElement': {
																				},
																				'showMorePropertyValues': {
																				},
																			};

																		if (typeof argument.filtering.interfaces === 'object') {
																			if (typeof argument.filtering.interfaces.switchElement === 'object') {
																				if (typeof argument.filtering.interfaces.switchElement.selector === 'string' && argument.filtering.interfaces.switchElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.switchElement.selector))) {
																						interfaces.switchElement.selector = argument.filtering.interfaces.switchElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement.selector' is bad '${argument.filtering.interfaces.switchElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement.selector' is bad '${argument.filtering.interfaces.switchElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.switchElement' is not object '${argument.filtering.interfaces.switchElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.additionalSwitchElement === 'object') {
																				if (typeof argument.filtering.interfaces.additionalSwitchElement.selector === 'string' && argument.filtering.interfaces.additionalSwitchElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.additionalSwitchElement.selector))) {
																						interfaces.additionalSwitchElement.selector = argument.filtering.interfaces.additionalSwitchElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement.selector' is bad '${argument.filtering.interfaces.additionalSwitchElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement.selector' is bad '${argument.filtering.interfaces.additionalSwitchElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.additionalSwitchElement' is not object '${argument.filtering.interfaces.additionalSwitchElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.collapseElement === 'object') {
																				if (typeof argument.filtering.interfaces.collapseElement.selector === 'string' && argument.filtering.interfaces.collapseElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.collapseElement.selector))) {
																						interfaces.collapseElement.selector = argument.filtering.interfaces.collapseElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement.selector' is bad '${argument.filtering.interfaces.collapseElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement.selector' is bad '${argument.filtering.interfaces.collapseElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.collapseElement' is not object '${argument.filtering.interfaces.collapseElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.resetElement === 'object') {
																				if (typeof argument.filtering.interfaces.resetElement.selector === 'string' && argument.filtering.interfaces.resetElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.resetElement.selector))) {
																						interfaces.resetElement.selector = argument.filtering.interfaces.resetElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement.selector' is bad '${argument.filtering.interfaces.resetElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement.selector' is bad '${argument.filtering.interfaces.resetElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.resetElement' is not object '${argument.filtering.interfaces.resetElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.propertiesContainerElement === 'object') {
																				if (typeof argument.filtering.interfaces.propertiesContainerElement.selector === 'string' && argument.filtering.interfaces.propertiesContainerElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.propertiesContainerElement.selector))) {
																						interfaces.propertiesContainerElement.selector = argument.filtering.interfaces.propertiesContainerElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement.selector' is bad '${argument.filtering.interfaces.propertiesContainerElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement.selector' is bad '${argument.filtering.interfaces.propertiesContainerElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.propertiesContainerElement' is not object '${argument.filtering.interfaces.propertiesContainerElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.filteringMenuElement === 'object') {
																				if (typeof argument.filtering.interfaces.filteringMenuElement.selector === 'string' && argument.filtering.interfaces.filteringMenuElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.filteringMenuElement.selector))) {
																						interfaces.filteringMenuElement.selector = argument.filtering.interfaces.filteringMenuElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement.selector' is bad '${argument.filtering.interfaces.filteringMenuElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement.selector' is bad '${argument.filtering.interfaces.filteringMenuElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.filteringMenuElement' is not object '${argument.filtering.interfaces.filteringMenuElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.blocksElement === 'object') {
																				if (typeof argument.filtering.interfaces.blocksElement.selector === 'string' && argument.filtering.interfaces.blocksElement.selector !== '') {
																					if ((element = document.querySelector(argument.filtering.interfaces.blocksElement.selector))) {
																						interfaces.blocksElement.selector = argument.filtering.interfaces.blocksElement.selector;
																					}
																					else {
																						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement.selector' is bad '${argument.filtering.interfaces.blocksElement.selector}'`);
																						break;
																					}
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement.selector' is bad '${argument.filtering.interfaces.blocksElement.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.blocksElement' is not object '${argument.filtering.interfaces.blocksElement}'`);
																				break;
																			}
																			if (typeof argument.filtering.interfaces.showMorePropertyValues === 'object') {
																				if (typeof argument.filtering.interfaces.showMorePropertyValues.text === 'string' && argument.filtering.interfaces.showMorePropertyValues.text !== '') {
																					interfaces.showMorePropertyValues.text = argument.filtering.interfaces.showMorePropertyValues.text;
																				}
																				else {
																					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.showMorePropertyValues.selector' is bad '${argument.filtering.interfaces.showMorePropertyValues.selector}'`);
																					break;
																				}
																			}
																			else {
																				console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces.showMorePropertyValues' is not object '${argument.filtering.interfaces.showMorePropertyValues}'`);
																				break;
																			}
																		}
																		else {
																			console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.interfaces' is not object '${argument.filtering.interfaces}'`);
																		}
																		if (
																				interfaces.additionalSwitchElement.selector
																				&& interfaces.collapseElement.selector
																				&& interfaces.blocksElement.selector
																				&& interfaces.filteringMenuElement.selector
																				&& interfaces.propertiesContainerElement.selector
																				&& interfaces.resetElement.selector
																				&& interfaces.switchElement.selector
																				&& interfaces.showMorePropertyValues.text
																			)
																		{
																			result.filtering.interfaces = argument.filtering.interfaces;
																			result.filtering.interfaceType = argument.filtering.interfaceType;
																			result.filtering.interfaceEnabled = true;
																		}
																	break;
																}
																if (result.filtering.interfaceEnabled === true) {
																}
															}
														}
													}
												}
												else {
													console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering.data' is bad '${argument.filtering.data}'`);
												}
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.filtering' is not object '${argument.filtering}'`);
										}

										return result;
									}
								}
								else {
									console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.items' is bad '${argument.items}'`);
								}
							}
							else {
								console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'result.itemsInterfaceElement' not found '${argument.itemsInterfaceSelector}'`);
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.itemsInterfaceSelector' is bad '${argument.itemsInterfaceSelector}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.functionToShowCatalogue' is not 'function' '${argument.functionToShowCatalogue}' `);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${argument}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function show */
		(function () {
			var
				f,
				functionName = 'show';

			f = function (argument) {
				console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						if (argument.showItemsInterface === true) {
							if (typeof argument.catalogueValue.functionToShowCatalogue === 'function') {
								argument.catalogueValue.functionToShowCatalogue(argument.catalogueValue, argument.reason);
							}
						}
						if (argument.processFilteringInterface) {
							F.processFilteringInterface({'catalogueValue': argument.catalogueValue, 'type': argument.processFilteringInterface});
						}
						if (argument.showSortingInterface === true) {
							if (argument.catalogueValue.items.size > 1) {
								F.showSortingInterface(argument.catalogueValue);
							}
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.catalogueValue' is not object`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function processFilteringInterface */
		(function () {
			var
				f,
				functionName = 'processFilteringInterface';

			f = function (argument) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						var
							catalogueValue = argument.catalogueValue;

						if (typeof catalogueValue.filtering === 'object') {
							if (catalogueValue.filtering.enabled === true) {
								if (catalogueValue.filtering.interfaceEnabled === true) {
									switch (catalogueValue.filtering.interfaceType) {
										case 'products':
											var
												additionalSwitchElement = document.querySelector(catalogueValue.filtering.interfaces.additionalSwitchElement.selector),
												collapseElement = document.querySelector(catalogueValue.filtering.interfaces.collapseElement.selector),
												blocksElement = document.querySelector(catalogueValue.filtering.interfaces.blocksElement.selector),
												filteringMenuElement = document.querySelector(catalogueValue.filtering.interfaces.filteringMenuElement.selector),
												propertiesContainerElement = document.querySelector(catalogueValue.filtering.interfaces.propertiesContainerElement.selector),
												resetElement = document.querySelector(catalogueValue.filtering.interfaces.resetElement.selector),
												switchElement = document.querySelector(catalogueValue.filtering.interfaces.switchElement.selector);

											if (blocksElement && filteringMenuElement) {
												filteringMenuElement.classList.add('enable');
												switch (argument.type) {
													case 'doAll':
														if (additionalSwitchElement) {
															window.addEventListener('scroll', function () {
																if ((filteringMenuElement.parentElement.offsetTop + filteringMenuElement.offsetTop + filteringMenuElement.offsetHeight) < window.scrollY) {
																	additionalSwitchElement.classList.add('visible');
																}
																else {
																	additionalSwitchElement.classList.remove('visible');
																}
															});
															window.addEventListener('resize', function () {
																if ((filteringMenuElement.parentElement.offsetTop + filteringMenuElement.offsetTop + filteringMenuElement.offsetHeight) < window.scrollY) {
																	additionalSwitchElement.classList.add('visible');
																}
																else {
																	additionalSwitchElement.classList.remove('visible');
																}
															});
															additionalSwitchElement.addEventListener('click', function () {
																filteringMenuElement.classList.add('open');
																filteringMenuElement.scrollIntoView();
																if (window.innerWidth < 1024) {
																	window.scrollBy(0, -64);
																}
															});
														}
														if (collapseElement) {
															collapseElement.addEventListener('click', function () {
																filteringMenuElement.classList.remove('open');
															});
														}
														if (resetElement) {
															resetElement.addEventListener('click', function () {
																catalogueValue.filtering.currentState.clear();
																F.filter(catalogueValue);
																if (catalogueValue.sorting.currentState) {
																	F.sort({catalogueValue, 'sortingItemKey': catalogueValue.sorting.currentState});
																}
																filteringMenuElement.classList.remove('active');
																F.show({catalogueValue, 'showItemsInterface': true, 'processFilteringInterface': 'reset', 'reason': 'filtering'});
															});
														}
														if (switchElement) {
															switchElement.classList.add('enable');
															switchElement.addEventListener('click', function () {
																filteringMenuElement.classList.add('open');
															});
														}
															blocksElement.classList.add('filtering');
													break;
												}
												if (propertiesContainerElement) {
													var
														propertiesElement = document.createElement('div');

													propertiesElement.classList.add('properties');

													catalogueValue.filtering.properties.forEach(function (propertyDataValue, propertyDataKey) {
														var
															propertyElement = document.createElement('div'),
															propertyNameElement = document.createElement('div'),
															propertyValuesElement = document.createElement('div');

														propertyNameElement.innerText = propertyDataValue.name;
														propertyElement.classList.add('property');
														propertyNameElement.classList.add('name');
														propertyValuesElement.classList.add('values');
														propertyDataValue.values.forEach(function (propertyValue) {
															var
																propertyValueElement = document.createElement('div');

															propertyValueElement.classList.add('value');
															if (catalogueValue.filtering.currentState.has(propertyDataKey)) {
																if (catalogueValue.filtering.currentState.get(propertyDataKey).has(propertyValue)) {
																	propertyValueElement.classList.add('set');
																}
															}
															propertyValueElement.addEventListener('click', function (event) {
																var
																	element = event.currentTarget,
																	propertyValues;

																element.classList.toggle('set');
																if (!catalogueValue.filtering.currentState.has(propertyDataKey)) {
																	catalogueValue.filtering.currentState.set(propertyDataKey, new Set([]));
																}
																propertyValues = catalogueValue.filtering.currentState.get(propertyDataKey);
																if (!propertyValues.has(propertyValue)) {
																	propertyValues.add(propertyValue);
																}
																else {
																	propertyValues.delete(propertyValue);
																	if (propertyValues.size === 0) {
																		catalogueValue.filtering.currentState.delete(propertyDataKey);
																	}
																}
																if (catalogueValue.filtering.currentState.size > 0) {
																	filteringMenuElement.classList.add('active');
																}
																else {
																	filteringMenuElement.classList.remove('active');
																}
																F.filter(catalogueValue);
																if (catalogueValue.sorting.currentState) {
																	F.sort({catalogueValue, 'sortingItemKey': catalogueValue.sorting.currentState});
																}
																F.show({catalogueValue, 'showItemsInterface': true, 'reason': 'filtering'});
															});
															switch (propertyDataValue.type) {
																case 'number':
																case 'string':
																	propertyValueElement.innerText = propertyValue;
																break;
																case 'fillOrEmptyString':
																	if (propertyValue === 0) {
																		propertyValueElement.innerText = propertyDataValue.valuesReplacement.empty;
																	}
																	else if (propertyValue === 1) {
																		propertyValueElement.innerText = propertyDataValue.valuesReplacement.fill;
																	}
																break;
															}
															propertyValuesElement.appendChild(propertyValueElement);
														});
														propertyElement.appendChild(propertyNameElement);
														propertyElement.appendChild(propertyValuesElement);
														if (propertyDataValue.values.length > 5) {
															var
																showMorePropertyValuesElement = document.createElement('div');

															showMorePropertyValuesElement.classList.add('show-more-values');
															showMorePropertyValuesElement.innerText = catalogueValue.filtering.interfaces.showMorePropertyValues.text;
															propertyElement.classList.add('show-more-values');
															showMorePropertyValuesElement.addEventListener('click', function () {
																propertyElement.classList.remove('show-more-values');
															});
															propertyElement.appendChild(showMorePropertyValuesElement);
														}
														propertiesElement.appendChild(propertyElement);
													});
													propertiesContainerElement.innerHTML = '';
													propertiesContainerElement.appendChild(propertiesElement);
												}
											}
										break;
									}
								}
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.filtering' is not object '${catalogueValue.filtering}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.catalogueValue' is not object '${argument.catalogueValue}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${arguments}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////


		/** @function showSortingInterface */
		(function () {
			var
				f,
				functionName = 'showSortingInterface';

			f = function (catalogueValue) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					element;

				if (typeof catalogueValue === 'object') {
					if (typeof catalogueValue.sorting === 'object') {
						switch (catalogueValue.sorting.itemsInterfaceType) {
							case 'menu':
								if (catalogueValue.sorting.enabled === true) {
									element = document.createElement('div');
									element.classList.add('items');
									catalogueValue.sorting.items.forEach(function (sortingItemValue, sortingItemKey) {
										var
											e = document.createElement('div');

										e.innerHTML = sortingItemValue.name;
										e.classList.add('item');
										if (catalogueValue.sorting.currentState === sortingItemKey) {
											e.classList.add('current');
											if (catalogueValue.sorting.switchInterfaceEnabled === true) {
												catalogueValue.sorting.switchInterfaceElement.innerHTML = sortingItemValue.name;
											}
										}
										e.addEventListener('click', function () {
											if (catalogueValue.sorting.currentState !== sortingItemKey) {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.remove('open');
												F.sort({catalogueValue, sortingItemKey});
												F.show({catalogueValue, 'showItemsInterface': true, 'showSortingInterface': true, 'reason': 'sorting'});
											}
											else {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.remove('open');
											}
										});
										element.appendChild(e);
										if (catalogueValue.sorting.switchInterfaceEnabled === true) {
											catalogueValue.sorting.switchInterfaceElement.classList.add('enable');
											catalogueValue.sorting.switchInterfaceElement.addEventListener('click', function () {
												catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.add('open');
											});
										}
										catalogueValue.sorting.itemsInterfaceElement.innerHTML = '';
										catalogueValue.sorting.itemsInterfaceElement.appendChild(element);
										catalogueValue.sorting.itemsInterfaceElement.parentElement.classList.add('enable');
									});
								}
							break;
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.sorting' is not object '${catalogueValue.sorting}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function sort */
		(function () {
			var
				f,
				functionName = 'sort';

			f = function (argument) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					catalogueValue,
					catalogueItemValue,
					sortingItemKey,
					sortingItemValue,
					itemsWithProperty = [],
					itemsWithoutProperty = [],
					source;

				if (typeof argument === 'object') {
					if (typeof argument.catalogueValue === 'object') {
						catalogueValue = argument.catalogueValue;
						if (argument.sortingItemKey) {
							sortingItemKey = argument.sortingItemKey;
							if (catalogueValue.sorting.items.has(sortingItemKey)) {
								catalogueValue.sorting.currentState = sortingItemKey;
								sortingItemValue = catalogueValue.sorting.items.get(sortingItemKey);
								if (catalogueValue.itemsKeysForShow) {
									source = catalogueValue.itemsKeysForShow;
								}
								else {
									source = catalogueValue.items;
								}
								if (source.size > 1) {
									source.forEach(function (value, catalogueItemKey) {
										catalogueItemValue = catalogueValue.items.get(catalogueItemKey);
										if (typeof catalogueItemValue === 'object') {
											if (catalogueItemValue.hasOwnProperty(sortingItemValue.property)) {
												switch (sortingItemValue.type) {
													case 'number':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'number') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
													break;
													case 'string':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'string') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
													break;
													case 'fillOrEmptyString':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'string') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
													break;
													case 'boolean':
														if (typeof catalogueItemValue[sortingItemValue.property] === 'boolean') {
															itemsWithProperty.push(catalogueItemKey);
														}
														else {
															itemsWithoutProperty.push(catalogueItemKey);
														}
													break;
													default:
														itemsWithoutProperty.push(catalogueItemKey);
													break;
												}
											}
											else {
												itemsWithoutProperty.push(catalogueItemKey);
											}
										}
										else {
											console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'${catalogueItemKey}' 'catalogueItemValue' is not object '${catalogueItemValue}'`);
										}
									});
									//console.log('itemsWithProperty:', itemsWithProperty, 'itemsWithoutProperty:', itemsWithoutProperty);
									switch (sortingItemValue.type) {
										case 'number':
											switch (sortingItemValue.order) {
												case '10':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return bKeyItem[sortingItemValue.property] - aKeyItem[sortingItemValue.property];
													});
												break;
												case '01':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return aKeyItem[sortingItemValue.property] - bKeyItem[sortingItemValue.property];
													});
												break;
											}
										break;
										case 'string':
											switch (sortingItemValue.order) {
												case 'ab':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return aKeyItem[sortingItemValue.property].localeCompare(bKeyItem[sortingItemValue.property]);
													});
												break;
												case 'ba':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return bKeyItem[sortingItemValue.property].localeCompare(aKeyItem[sortingItemValue.property]);
													});
												break;
											}
										break;
										case 'fillOrEmptyString':
											switch (sortingItemValue.order) {
												case 'ef':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return (aKeyItem[sortingItemValue.property] ? 1 : 0) - (bKeyItem[sortingItemValue.property] ? 1 : 0);
													});
												break;
												case 'fe':
													itemsWithProperty.sort(function (aKey, bKey) {
														var
															aKeyItem = catalogueValue.items.get(aKey),
															bKeyItem = catalogueValue.items.get(bKey);

														return (bKeyItem[sortingItemValue.property] ? 1 : 0) - (aKeyItem[sortingItemValue.property] ? 1 : 0);
													});
												break;
											}
										break;
									}
									//console.log('itemsWithProperty:', itemsWithProperty, 'itemsWithoutProperty:', itemsWithoutProperty);
									catalogueValue.itemsKeysForShow = new Set(itemsWithProperty.concat(itemsWithoutProperty));
								}
							}
							else {
								console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.sorting.items' not has '${sortingItemKey}'`);
							}
						}
						else {
							console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.sortingItemKey' is bad '${argument.sortingItemKey}'`);
						}
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument.catalogueValue' is not object '${argument.catalogueValue}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'argument' is not object '${argument}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		/** @function filter */
		(function () {
			var
				f,
				functionName = 'filter';

			f = function (catalogueValue) {
				//console.log(`${mainName}.${moduleName}.${functionName}`, arguments);
				var
					catalogueItemsKeys = new Map([]);

				if (typeof catalogueValue === 'object') {
					if (typeof catalogueValue.filtering === 'object') {
						catalogueValue.items.forEach(function (catalogueItemValue, catalogueItemKey) {
							catalogueItemsKeys.set(catalogueItemKey, 0);
						});
						//console.log(catalogueItemsKeys);
						catalogueValue.filtering.currentState.forEach(function (currentFilteringItemValue, currentFilteringItemKey) {
							catalogueItemsKeys.forEach(function (catalogueItemsKeysItemValue, catalogueItemKey) {
								if (currentFilteringItemValue.size > 0) {
									currentFilteringItemValue.forEach(function (propertyValue) {
										var
											catalogueItemValue = catalogueValue.items.get(catalogueItemKey),
											propertyDataValue = catalogueValue.filtering.properties.get(currentFilteringItemKey),
											filteringItemValueProperty = propertyDataValue.property,
											filteringItemValueType = propertyDataValue.type;

										switch (filteringItemValueType) {
											case 'number':
											case 'string':
												if (catalogueItemValue[filteringItemValueProperty] === propertyValue) {
													catalogueItemsKeysItemValue = 1;
												}
											break;
											case 'fillOrEmptyString':
												if (typeof catalogueItemValue[filteringItemValueProperty] === 'string') {
													if (catalogueItemValue[filteringItemValueProperty] !== '') {
														if (propertyValue === 1) {
															catalogueItemsKeysItemValue = 1;
														}
													}
													else {
														if (propertyValue === 0) {
															catalogueItemsKeysItemValue = 1;
														}
													}
												}
											break;
										}
										//console.log(catalogueItemKey, catalogueItemValue[filteringItemValueProperty], propertyValue, catalogueItemsKeysItemValue);

										//console.log(catalogueItemKey, propertyValue, itemPropertyName, catalogueItemValue[itemPropertyName]);
									});
									if (catalogueItemsKeysItemValue === 0) {
										catalogueItemsKeys.delete(catalogueItemKey);
									}
								}
							});
						});
						//console.log('catalogueItemsKeys', catalogueItemsKeys);
						//catalogueValue.itemsKeysForShow = Array.from(catalogueItemsKeys.keys());
						catalogueValue.itemsKeysForShow = new Set(catalogueItemsKeys.keys());
						//console.log('catalogueValue.itemsKeysForShow', catalogueValue.itemsKeysForShow);
					}
					else {
						console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue.filtering' is not object '${catalogueValue.filtering}'`);
					}
				}
				else {
					console.error(`${mainName}.${moduleName}.${functionName}`, arguments, `'catalogueValue' is not object '${catalogueValue}'`);
				}
			};

			F[functionName] = f;
		})();
		///////////////////////////////////////////////////////////////////////////////////////////////

		Modules[moduleName] = module;
	})();
	///////////////////////////////////////////////////////////////////////////////////////////////


	window.addEventListener('DOMContentLoaded', Modules.fillPage);
})();