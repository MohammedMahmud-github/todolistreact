import '../index.css'

/**
 * 
 * Task {
 *      desc: string
 *      isDone: bool
 * }
 */


export function Task (props) {
    return (
        <>
        <div className="individualTask">
                {props.Task.desc}
            </div>
        </>
    )
}
