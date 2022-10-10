import { useEffect, useState } from "react";
import axios from "axios";

const Newsapi = () => {
	const [news, changeNews] = useState([]);
	const gettheNews = () => {
		axios({
			url: 'https://newsapi.org/v2/top-headlines',
			method: 'GET',
			params: {
				country: 'us',
				apiKey: '6a3c614c06ec4320aa32c6db5b2041df'
			},
		}).then((response) => {
			changeNews(response.data.articles);
			// console.log(response.data.articles);
		}
		).catch()
	};
	useEffect(() => {
		gettheNews();
	}, []);
	return (
		<>
			<div id="wrapper">
				{news.map((value, index) => {
					return (
						<div className="card flex-div" key={index}>
							<img className="card-img-top div_img" src={value.urlToImage} alt="Card Image" />
							<div className="card-body">
								<div className="header text-primary card-title fw-bold">{value.title}</div>
								<p className="content card-text">{value.description}</p>
							</div>
							<div className="card-footer bg-transparent">
								<small className="text-muted">Last updated 3 mins ago</small>
								<a href="#" className="btn btn-primary">VIEW</a>
							</div>
						</div>
					)
				})
				}
			</div>
		</>
	);
}
export default Newsapi;