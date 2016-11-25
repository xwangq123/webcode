//最外层的
var Combox = React.createClass({
  //初始化时候给state赋值
  getInitialState: function () {
    return {data: []};
  },
  //渲染的时候查询数据
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data})
      }.bind(this)
    });
  },
  //数据保存提交
  handleCommentSubmit: function (comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    console.log(this.state);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <div className="combox">
        Hello World
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});


//列表
var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (item) {
      return (
        <div className="comment">
          <CommentItem author={item.author}>{item.text}</CommentItem>
        </div>
      );
    });
    return (
      <div className="commentList">
        <h1>列表头头</h1>
        {commentNodes}
      </div>
    );
  }
});

var CommentItem = React.createClass({
  rawMarkup: function () {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  },
  render: function () {
    return (
      <span className="comment">
        <h2>{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
      </span>
    );


  }
});

//新增
var CommentForm = React.createClass({
  //初始化的时候给state赋值
  getInitialState: function () {
    return {name: '', ahq: ''};
  },
  //每次文本框改变的时候赋值 如果不写 文本框无法输入
  handleNameChage: function (e) {
    this.setState({name: e.target.value})
  },

  comentFormSubmit: function (e) {
    e.preventDefault();
    console.log(this.state)
    var name = this.state.name;
    var ahq = this.state.ahq;
    //保存到json文件
    this.props.onCommentSubmit({author: name, text: ahq});
    //清空state
    this.setState({name: '', ahq: ''})
  },
  handleAhqChage: function (e) {
    this.setState({ahq: e.target.value})
  },
  render: function () {
    return (
      <form className="commentForm" onSubmit={this.comentFormSubmit}>
        <input placeholder="You Name"
               value={this.state.name}
               onChange={this.handleNameChage}/>
        <input placeholder="Say something..."
               value={this.state.ahq}
               onChange={this.handleAhqChage}/>
        <input type="submit" value="Post"/>
      </form>
    );
  }
});

ReactDOM.render(
  <Combox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);

