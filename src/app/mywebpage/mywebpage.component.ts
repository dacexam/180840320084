import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywebpage',
  templateUrl: './mywebpage.component.html',
  styleUrls: ['./mywebpage.component.css']
})
export class MywebpageComponent  {

  pdata='';
  postlist=[];
  cdata='';
  post()
  {
    if( this.pdata=='')
    { 
        this.pdata='First post something';
    }else
    {
    const postobj={"like":0,"dislike":0,"postdata":this.pdata,"comment":[]};
    this.postlist.splice(0,0,postobj);
    this.pdata='';
    }
  }
  like(i){
    i.like +=1;
  }
  dislike(i){
    i.dislike +=1;
  }
  editpost(i){
    i.postdata=this.pdata;
    this.pdata='';
  }
  deletepost(i){
    const index=this.postlist.indexOf(i);
    this.postlist.splice(index,1);
  }
  postcomment(i){
    if( this.cdata=='')
    { 
        this.cdata='post something';
    }else
    {
      const index=this.postlist.indexOf(i);
       i.comment.splice(index,0,this.cdata);
      this.cdata='';
    }
  }
  deletecomment(i,commentval){
    const index=i.comment.indexOf(commentval);
    i.comment.splice(index,1);
    this.cdata='';
  }
  editcomment(i,commentval){
     const index=i.comment.indexOf(commentval);
    i.comment[index]=this.cdata;
    this.cdata='';
  }
}
