import cover from '../images/cover.jpg'
import profileimg from '../images/profile.jpeg'
import { profile } from '../data'
const Profile = () => {
    return (
        <>
            <section className="cover-image">
                <img src={cover} alt="cover" />
                <div className="profile-picture">
                    <img src={profileimg} alt="profile" />
                </div>
                {profile.map((about) => {
                    return (
                        <section key={about.id}>
                            <div className="user-info">
                                <div className="card">
                                    <h3 className="user-name">{about.name}</h3>
                                    <div className="verified-badges">
                                        <i className={about.gemIcon}></i>
                                        <i className={about.verified}></i>
                                    </div>
                                </div>
                                <div className="user-counts">
                                    <span className="followers-count">{about.followers}</span>
                                    <span className="following-count">{about.following}</span>
                                </div>
                                <div className="fols">
                                    <span className="first">Followers</span>
                                    <span>Following</span>
                                </div>
                            </div>
                            <div className="main-details">
                                <div className="user-details">
                                    <p className="user-bio">{about.bio}</p>
                                    <a href={about.social} className="social-link">
                                        {about.social}
                                    </a>
                                </div>
                                <div className="icon-row">
                                    <i className={about.starIcon}></i>
                                    <span>{about.starCount}</span>
                                    <i className={about.likeIcon}></i>
                                    <span>{about.likeCount}</span>
                                    <i className={about.viewIcon}></i>
                                    <span>{about.viewCount}</span>
                                    <i className={about.heartIcon}></i>
                                    <span>{about.heartCount}</span>
                                </div>
                            </div>
                            <div className="posts">{about.posts} Posts</div>
                            <div className="helper"></div>
                        </section>
                    )
                })}
            </section>
        </>
    )
}

export default Profile
