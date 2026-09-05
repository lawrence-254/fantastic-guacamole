import "./commentForm.css";

const CommentForm = ({ formTitle }) => {
  return (
    <div className="formMainContainer">
      <div className="formHeader">
        <div className="titleWithRedDot">
          <div className="smallRedBullet"></div>
          {formTitle}
        </div>
        <div></div>
      </div>
      <div className="commentArea">
        <form className="formContainer">
          <div className="formTop">
            <div className="formLeft">
              <div className="formName">
                <label>Name</label>
                <input
                  className="formNameInput"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="formWebsite">
                <label>Website</label>
                <input
                  className="formWebsiteInput"
                  type="url"
                  name="website"
                  placeholder="Enter your website"
                />
              </div>
              <div className="formEmail">
                <label>Email</label>
                <input
                  className="formEmailInput"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="formRight">
              <div className="formComment">
                <label>Comment</label>
                <textarea
                  className="formCommentInput"
                  name="comment"
                  rows={5}
                  placeholder="Enter your comment"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="formBottom">
            <div className="rateComment">
              <h1>Rate the usefulness of the article</h1>
              <div className="rateCommentIcons">
                <span className="rateCommentIcon">
                  <img src="/images/single/ratepost/icon1.png" alt="n" />
                </span>
                <span className="rateCommentIcon">
                  <img src="/images/single/ratepost/icon2.png" alt="n" />
                </span>
                <span className="rateCommentIcon">
                  <img src="/images/single/ratepost/icon3.png" alt="n" />
                </span>
                <span className="rateCommentIcon">
                  <img src="/images/single/ratepost/icon4.png" alt="n" />
                </span>
                <button className="rateCommentButton" type="button">
                  <span className="rateCommentButtonIcon">
                    <img
                      src="/images/single/ratepost/goodButtonIcon.png"
                      alt=""
                    />
                    <span>Good</span>
                  </span>
                </button>
              </div>
            </div>
            <button className="sendCommentButton" type="submit">
              <span className="sendCommentButtonIcon">
                <img
                  src="/images/single/ratepost/submitCommentIcon.png"
                  alt=""
                />
                <span>Send Comment</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
