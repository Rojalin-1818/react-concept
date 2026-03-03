const ChildUseState=({data:{login,id,node_id,avatar_url,type,user_view_type,site_admin}})=>{
    return(
        <div className="card">
            <div className="image"><img src={avatar_url} alt="" /></div>
            <h3>username:{login}</h3>
            <div className="textarea">
            <p>ID:{id}</p>
            <p>Type:{type}</p>
            <p>Node_ID:{node_id}</p>
            </div>
</div>
    )

}
export default ChildUseState