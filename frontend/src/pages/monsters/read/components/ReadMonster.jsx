import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReadOnlyMonster from "./ReadOnlyMonster";
import EditableMonster from "./EditableMonster";
import { GetMonster, DeleteMonster } from "../../../../requests/monsters";
import styles from "../ReadMonsters.module.css";

function ReadMonster() {
	const [isEditable, setIsEditable] = useState(false);
	const [monster, setMonster] = useState({});
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		fetchMonster();
	}, [])

	async function fetchMonster() {
		try {
			const { data } = await GetMonster(id);
			setMonster(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function handleDelete(id) {
		try {
			await DeleteMonster(id);
			navigate("/monsters");
		} catch (error) {
			console.error(e);
		}
	}

	const actionsClass = document.getElementById('action');
	if (actionsClass) {
		actionsClass.style.overflowY = "hidden";
	}

	return (
		<div className={`${styles.actions} ${styles.expanded}`}>
			<section className={styles.section}>
				{isEditable
					? <EditableMonster monster={monster}
					 setMonster={setMonster} setIsEditable={setIsEditable} actionsClass={actionsClass} />
					: <ReadOnlyMonster monster={monster} />
				}
			</section>
			{isEditable
				? '' : <div className={styles.buttons}>
					<button onClick={() => setIsEditable(true)} className={styles.edit}>Edit</button>
					<button onClick={() => handleDelete(monster._id)} className={styles.delete}>Delete</button>
				</div>
			}
			<span><Link to={"/monsters"} className={styles.close}>&#10006;</Link></span>
		</div>
	);
}

export default ReadMonster;