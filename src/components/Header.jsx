import React, { Component } from 'react';
import Cart from '../components/Cart';

import icon_header_01 from '../images/icons/icon-header-01.png';
import logo from '../images/icons/logo.png';
import icon_header_02 from '../images/icons/icon-header-02.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      cartActive:false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleMenuTogglerClick = this.handleMenuTogglerClick.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
  }

  handleMenuTogglerClick(){
    this.setState(state => ({
	  menuActive: !state.menuActive,
	  cartActive: false
    }));
  }

  handleCartClick(){
    this.setState(state => ({
	  cartActive: !state.cartActive,
	  menuActive: false
    }));
  }
  
  render() {
	const { totalPrice, count, items } = this.props;
    return (

	<header className="header1">
		{/* Header desktop */}
		<div className="container-menu-header">
			<div className="topbar">
				<div className="topbar-social">
					<a href="#" className="topbar-social-item fa fa-facebook"></a>
					<a href="#" className="topbar-social-item fa fa-instagram"></a>
					<a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
					<a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
					<a href="#" className="topbar-social-item fa fa-youtube-play"></a>
				</div>

				<span className="topbar-child1">
					Free shipping for standard order over $100
				</span>

				<div className="topbar-child2">
					<span className="topbar-email">
						fashe@example.com
					</span>

					<div className="topbar-language rs1-select2">
						<select className="selection-1" name="time">
							<option>USD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>

			<div className="wrap_header">
				{/* Logo */}
				<a href="index.html" className="logo">
					<img src={logo} alt="IMG-LOGO"/>
				</a>

				{/* Menu */}
				<div className="wrap_menu">
					<nav className="menu">
						<ul className="main_menu">
							<li>
								<a href="index.html">Home</a>
								<ul className="sub_menu">
									<li><a href="index.html">Homepage V1</a></li>
									<li><a href="home-02.html">Homepage V2</a></li>
									<li><a href="home-03.html">Homepage V3</a></li>
								</ul>
							</li>

							<li>
								<a href="product.html">Ди</a>
							</li>

							<li className="sale-noti">
								<a href="product.html">Ма</a>
							</li>

							<li>
								<a href="cart.html">С</a>
							</li>

							<li>
								<a href="blog.html">О</a>
							</li>

							<li>
								<a href="about.html">С</a>
							</li>

							<li>
								<a href="contact.html">И</a>
							</li>
						</ul>
					</nav>
				</div>

				{/* Header Icon */}
				<div className="header-icons">
					<a href="#" className="header-wrapicon1 dis-block">
						<img src={icon_header_01} className="header-icon1" alt="ICON"/>
					</a>

					<span className="linedivide1"></span>

					<div className="header-wrapicon2">
            <img src={icon_header_02} className={this.state.cartActive ? 'header-icon1 js-show-header-dropdown show-header-dropdown': 'header-icon1 js-show-header-dropdown'} onClick={this.handleCartClick} alt="ICON"/>
						<span className="header-icons-noti">{count}</span>

						{/* Header cart noti */}
						<div className={this.state.cartActive ? 'header-cart header-dropdown show-header-dropdown' : 'header-cart header-dropdown'}>
							<ul className="header-cart-wrapitem">
								{items.map(book => <Cart {...book} />)}
							</ul>

							<div className="header-cart-total">
								Total: ${totalPrice}
							</div>

							<div className="header-cart-buttons">
								<div className="header-cart-wrapbtn">
									{/* Button */}
									<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div className="header-cart-wrapbtn">
									{/* Button */}
									<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Header Mobile */}
		<div className="wrap_header_mobile">
			{/* Logo moblie */}
			<a href="index.html" className="logo-mobile">
				<img src={logo} alt="IMG-LOGO"/>
			</a>

			{/* Button show menu */}
			<div className="btn-show-menu">
				{/* Header Icon mobile */}
				<div className="header-icons-mobile">
					<a href="#" className="header-wrapicon1 dis-block">
						<img src={icon_header_01} className="header-icon1" alt="ICON"/>
					</a>

					<span className="linedivide2"></span>

					<div className="header-wrapicon2">
						<img src={icon_header_02} className={this.state.cartActive ? 'header-icon1 js-show-header-dropdown show-header-dropdown': 'header-icon1 js-show-header-dropdown'} onClick={this.handleCartClick} alt="ICON"/>
						<span className="header-icons-noti">{count}</span>

						{/* Header cart noti */}
						<div className={this.state.cartActive ? 'header-cart header-dropdown show-header-dropdown' : 'header-cart header-dropdown'}>
							<ul className="header-cart-wrapitem">
								{items.map(book => <Cart {...book} />)}
							</ul>

							<div className="header-cart-total">
								Total: ${totalPrice}
							</div>

							<div className="header-cart-buttons">
								<div className="header-cart-wrapbtn">
									{/* Button */}
									<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div className="header-cart-wrapbtn">
									{/* Button */}
									<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={this.state.menuActive ? 'btn-show-menu-mobile hamburger hamburger--squeeze is-active': 'btn-show-menu-mobile hamburger hamburger--squeeze'} onClick={this.handleMenuTogglerClick}>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</div>
			</div>
		</div>

		{/* Menu Mobile */}
		<div className={this.state.menuActive ? 'wrap-side-menu wrap-side-menu-active': 'wrap-side-menu'} >
			<nav className="side-menu">
				<ul className="main-menu">
					<li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span className="topbar-child1">
							Free shipping for standard order over $100
						</span>
					</li>

					<li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<div className="topbar-child2-mobile">
							<span className="topbar-email">
								fashe@example.com
							</span>

							<div className="topbar-language rs1-select2">
								<select className="selection-1" name="time">
									<option>USD</option>
									<option>EUR</option>
								</select>
							</div>
						</div>
					</li>

					<li className="item-topbar-mobile p-l-10">
						<div className="topbar-social-mobile">
							<a href="#" className="topbar-social-item fa fa-facebook"></a>
							<a href="#" className="topbar-social-item fa fa-instagram"></a>
							<a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
							<a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
							<a href="#" className="topbar-social-item fa fa-youtube-play"></a>
						</div>
					</li>

					<li className="item-menu-mobile">
						<a href="index.html">Home</a>
						<ul className="sub-menu">
							<li><a href="index.html">Homepage V1</a></li>
							<li><a href="home-02.html">Homepage V2</a></li>
							<li><a href="home-03.html">Homepage V3</a></li>
						</ul>
						<i className="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
					</li>

					<li className="item-menu-mobile">
						<a href="product.html">Shop</a>
					</li>

					<li className="item-menu-mobile">
						<a href="product.html">Sale</a>
					</li>

					<li className="item-menu-mobile">
						<a href="cart.html">Features</a>
					</li>

					<li className="item-menu-mobile">
						<a href="blog.html">Blog</a>
					</li>

					<li className="item-menu-mobile">
						<a href="about.html">About</a>
					</li>

					<li className="item-menu-mobile">
						<a href="contact.html">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
    );
  }
}

export default Header;
